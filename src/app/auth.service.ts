import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor() { }

  setBasicAuth(user: User) {
    this.user = user;
  }

  getBasicAuth() {
    return this.user;
  }

  setLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }
}
