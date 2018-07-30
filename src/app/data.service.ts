import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getEmployeesByLevel() {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbylevel', {headers});
  }

  getEmployeesByBadge() {
    const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('scarface08x:user123'));
    return this.http.get('http://localhost:8080/coders-guild/api/employeesbybadges', {headers});
  }

}
