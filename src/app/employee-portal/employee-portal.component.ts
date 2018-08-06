import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { share } from '../../../node_modules/rxjs/operators';
import { Skill } from '../skill';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent implements OnInit {
  employee: Observable<Object>;
  badges: Observable<Object>;
  skills: Observable<Object>;
  trophies: Observable<Object>;
  id: Object;
  toUpdate: boolean;
  toAddSkills: boolean;
  skill: Observable<Object>;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe( params => this.id = params.id);
  }

  ngOnInit() {
    this.employee = this.data.getEmployee();
    this.badges = this.data.getEmployeeBadges(this.id).pipe(share());
    this.skills = this.data.getEmployeeSkills(this.id).pipe(share());
    this.trophies = this.data.getEmployeeTrophies(this.id).pipe(share());
  }

  setToUpdate(toUpdate) {
    this.toUpdate = toUpdate;
  }

  setToAddSkills(toAddSkills) {
    this.toAddSkills = toAddSkills;
  }

  createSkill(id, skill) {
    this.skill = this.data.createSkill(id, skill);
    this.setToAddSkills(false);
  }

  updateEmployee(id, employee) {
    this.employee = this.data.update(id, employee);
    this.setToUpdate(false);
  }
}
