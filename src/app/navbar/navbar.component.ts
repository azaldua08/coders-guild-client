import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  user = new User('', '');
  employee: Object;
  constructor(public authService: AuthService, public data: DataService) { }

  ngDoCheck() {
    this.user = this.authService.getBasicAuth();
    this.employee = this.data.getEmployee();
  }

  onLogout() {
    this.authService.setBasicAuth(new User('', ''));
  }
}
