import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/internal/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user = new User('', '');
  employee: Object;
  error: string;

  constructor(private authService: AuthService, private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.setBasicAuth(this.user);
    this.data.getEmployeeByUsername(this.authService.getBasicAuth().username).subscribe(
      data => {
        console.log('success');
        this.employee = data;
        this.authService.setLoggedIn(true);
        this.data.setEmployee(of(this.employee));
        return true;
      },
      error => {
        console.log('error');
        this.error = 'Error';
        // Store the attempted URL for redirecting
        this.handleAuthError(error);
        return false;
      },
      () => {
        this.router.navigate(['/home']);
        console.log('complete');
      }
    );
  }

  private handleAuthError(err: any): Observable<any> {
    // handle your auth error or rethrow
    if (err.status === 401) {
      // navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      this.authService.setBasicAuth(undefined);
      this.setError('The login credentials you entered are invalid.');
      this.router.navigate(['/login']);
      // if you've caught / handled the error, you don't want to rethrow it
      // unless you also want downstream consumers to have to handle it as well.
      // return of(err.message);
    }
    throw err;
  }

  setError(error) {
    this.error = error;
  }
}
