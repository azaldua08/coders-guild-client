import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { Employee } from '../employee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from '../ngb-date-fr-parser-formatter';
import * as $ from 'jquery';


@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  defaultAvatar = 'https://bootdey.com/img/Content/avatar/avatar2.png';
  emp = new Employee('', '', '', '', '', '', 'Active', this.defaultAvatar, 'USER', '2014-07-20');
  success: boolean;
  avatars = new Array();

  constructor(private formatter: NgbDateFRParserFormatter, private data: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    for (let i = 1; i <= 8; i++) {
      const photoUrl = 'https://bootdey.com/img/Content/avatar/avatar' + i + '.png';
      this.avatars.push(photoUrl);
    }
    this.loadZoomEffect();
  }

  createEmployee(emp) {
    emp.joinDate = this.formatter.format(emp.joinDate);
    this.data.createEmployee(emp).subscribe(
      data => {
        this.emp = data;
        if (this.emp.name.length > 0) {
          this.success = true;
        }
      }
    );
  }


  setJobClass(emp) {
    switch (emp.guild) {
      case 'Knights of the Round Table':
        this.emp.jobClass = 'Knight';
        break;
      case 'Legion of Arrows':
        this.emp.jobClass = 'Archer';
        break;
      case 'Circle of Magicians':
        this.emp.jobClass = 'Mage';
        break;
      case 'Shadow Brotherhood':
        this.emp.jobClass = 'Assassin';
        break;
      case 'The Elder Council':
        this.emp.jobClass = 'Master';
        break;
    }

  }

  setDefaultAvatar(url) {
    this.emp.avatar = url;

  }

  loadZoomEffect() {
    $(document).ready(function () {


      $('.zoom').hover(function () {

        $(this).addClass('transition');
      }, function () {

        $(this).removeClass('transition');
      });
    });
  }
}
