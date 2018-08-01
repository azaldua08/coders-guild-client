import { Component, OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  user = new User('', '');
  employee: Observable<Object>;
  constructor(public authService: AuthService, public data: DataService) { }

  ngDoCheck() {
    this.user = this.authService.getBasicAuth();
    this.employee = this.data.getEmployee();
  }

  onLogout() {
    this.authService.setBasicAuth(new User('', ''));
  }
}
