import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs/operators';
import { Skill } from '../skill';
import * as $ from 'jquery';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent implements AfterViewChecked, OnInit {
  employee$: Observable<Object>;
  badges$: Observable<Object>;
  skills$: Object[];
  trophies$: Observable<Object>;
  id: Object;
  toUpdate: boolean;
  toAddSkills: boolean;
  skill = new Skill('', 0);

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    console.log('ngInit');
    this.employee$ = this.data.getEmployee();
    this.badges$ = this.data.getEmployeeBadges(this.id).pipe(share());
    this.data.getEmployeeSkills(this.id).subscribe(
      data => this.skills$ = data
    );
    this.trophies$ = this.data.getEmployeeTrophies(this.id).pipe(share());
    this.loadSkillBar();

  }

  ngAfterViewChecked() {
    $('#main-div').trigger('skillbar');
  }

  setToUpdate(toUpdate) {
    this.toUpdate = toUpdate;
  }

  setToAddSkills(toAddSkills) {
    this.toAddSkills = toAddSkills;
    this.skill = new Skill('', 0);
  }

  createSkill(id, skill) {
    this.data.createSkill(id, skill).subscribe(
      data => {
        this.skill = data;
        this.skills$.push(this.skill);
        $('#main-div').trigger('skillbar');
      }
    );
    this.setToAddSkills(false);


  }

  updateEmployee(id, employee) {
    this.employee$ = this.data.update(id, employee);
    this.setToUpdate(false);
  }

  deleteSkill(id, skill) {
    let index: number;
    index = this.skills$.indexOf(skill);
    this.data.deleteSkill(id).subscribe(
      () => this.skills$.splice(index, 1)
    );
  }

  loadSkillBar() {

    $('#main-div').on('skillbar', function () {
      $('.progress .progress-bar.six-sec-ease-in-out').each(function () {
        $(this).css('width', $(this).attr('aria-valuenow')
          + '%');
      });
    });

  }
}
