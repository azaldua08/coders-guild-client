import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employee: Observable<Object>;

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

  getEmployeeBadges(id) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeebadges/' + id);
  }

  getEmployeeSkills(id) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeeskills/' + id);
  }

  getEmployeeTrophies(id) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeetrophies/' + id);
  }

  update(id, employee) {
    return this.http.put('http://localhost:8080/coders-guild/api/employee/' + id, employee);
  }

  getEmployee() {
    return this.employee;
  }

  setEmployee(employee) {
    this.employee = employee;
  }
}
