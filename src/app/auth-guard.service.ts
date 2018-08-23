import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { User } from './user';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators';

@Injectable()
export class AuthGuard implements CanActivate {
    user = new User('', '');
    employee: Object;
    error = '';
    constructor(private authService: AuthService, private data: DataService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): any {
        // let canLogin = false;
        return true;
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
                this.authService.redirectUrl = url;
                this.handleAuthError(error);
                return false;
            }
        );
        // console.log('canLogin = ' + canLogin);
        // return canLogin;
        // this.employee = this.data.getEmployeeByUsername(this.authService.getBasicAuth().username)
        //     .pipe(share(), catchError((error, caught) => {
        //         // intercept the response error and displace it to the console

        //         this.error = 'Error';
        //         console.log(this.error.length);
        //         this.handleAuthError(error);
        //         return of(error);
        //     }));




    }

    private handleAuthError(err: any): Observable<any> {
        // handle your auth error or rethrow
        if (err.status === 401) {
            // navigate /delete cookies or whatever
            console.log('handled error ' + err.status);
            this.authService.setBasicAuth(undefined);
            // this.data.setError(this.error);
            this.router.navigate(['/login']);
            // if you've caught / handled the error, you don't want to rethrow it
            // unless you also want downstream consumers to have to handle it as well.
            // return of(err.message);
        }
        throw err;
    }
}
