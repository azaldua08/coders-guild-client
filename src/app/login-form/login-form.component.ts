import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = new User('', '');
  employee: Observable<Object>;

  constructor(private authService: AuthService, private data: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.setBasicAuth(this.user);
    this.employee = this.data.getEmployeeByUsername(this.user.username).pipe(share());
    this.data.setEmployee(this.employee);
  }

}
