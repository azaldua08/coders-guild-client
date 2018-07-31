import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  user = new User('', '');
  constructor(public authService: AuthService) { }

  ngDoCheck() {
    this.user = this.authService.getBasicAuth();
  }

  onLogout() {
    this.authService.setBasicAuth(new User('', ''));
  }
}
