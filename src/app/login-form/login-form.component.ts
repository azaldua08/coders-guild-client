import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = new User('', '');
  employee: Object;
  constructor(private authService: AuthService, private data: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.setBasicAuth(this.user);
    this.data.getEmployeeByUsername(this.user.username).subscribe(
      data => this.employee = data
    );
    this.data.setEmployee(this.employee);
  }

}
