import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employee: Object;
  constructor(private http: HttpClient) { }

  getEmployeesByLevel() {
    // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbylevel');
  }

  getEmployeesByBadge() {
    // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbybadges');
  }

  getEmployeeByUsername(username) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeebyusername/' + username);
  }

  getEmployee() {
    return this.employee;
  }

  setEmployee(employee) {
    this.employee = employee;
  }
}
