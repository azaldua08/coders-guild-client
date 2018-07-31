import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  user: User;
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.user = this.auth.getBasicAuth();
    request = request.clone({
      setHeaders: {
        Authorization: 'Basic ' + btoa(this.user.username + ':' + this.user.password)
      }
    });
    return next.handle(request);
  }
}
