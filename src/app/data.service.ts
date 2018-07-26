import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmployeesByLevel() {
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbylevel');
  }

  getEmployeesByBadge() {
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbybadges');
  }

}
