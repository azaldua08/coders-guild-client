import { Component, OnInit, DoCheck } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent implements OnInit {
  employee: Observable<Object>;
  toUpdate: boolean;
  constructor(public data: DataService) { }

  ngOnInit() {
    this.employee = this.data.getEmployee();
  }

  setToUpdate(toUpdate) {
    this.toUpdate = toUpdate;
  }
}
