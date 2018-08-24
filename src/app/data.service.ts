import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from './skill';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employee: Observable<Object>;
  constructor(private http: HttpClient) { }

  getEmployeesByLevel() {
    // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get<Object []>('http://localhost:8080/coders-guild/api/employeesbylevel');
  }

  getEmployeesByBadge() {
    // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbybadges');
  }

  getEmployeesByGuild(guild) {
    // const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get<Object[]>('http://localhost:8080/coders-guild/api/employeesbyguild/' + guild);
  }

  getEmployeeByUsername(username) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeebyusername/' + username);
  }

  getEmployeeBadges(id) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeebadges/' + id);
  }

  getEmployeeSkills(id) {
    return this.http.get<Object []>('http://localhost:8080/coders-guild/api/employeeskills/' + id);
  }

  createEmployee(employee) {
    return this.http.post<Employee>('http://localhost:8080/coders-guild/api/employee/add', employee);
  }

  createSkill(id, skill) {
    return this.http.post<Skill>('http://localhost:8080/coders-guild/api/employeeskill/add/' + id, skill);
  }

  getEmployeeTrophies(id) {
    return this.http.get('http://localhost:8080/coders-guild/api/employeetrophies/' + id);
  }

  update(id, employee) {
    return this.http.put('http://localhost:8080/coders-guild/api/employee/' + id, employee);
  }

  deleteSkill(id) {
    return this.http.delete('http://localhost:8080/coders-guild/api/employeeskill/' + id);
  }

  deleteEmployee(id) {
    return this.http.delete('http://localhost:8080/coders-guild/api/employee/' + id);
  }

  getEmployee() {
    return this.employee;
  }

  setEmployee(employee) {
    this.employee = employee;
  }

}
