import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor() { }

  setBasicAuth(user: User) {
    this.user = user;
  }

  getBasicAuth() {
    return this.user;
  }
}
