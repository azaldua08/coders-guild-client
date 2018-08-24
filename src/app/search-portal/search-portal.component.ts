import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { share } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-search-portal',
  templateUrl: './search-portal.component.html',
  styleUrls: ['./search-portal.component.css']
})
export class SearchPortalComponent implements OnInit {
  user$: Object;
  users$ = new Array();
  constructor(private data: DataService) { }
  employee$: Observable<Object>;
  error = '';

  ngOnInit() {
    this.employee$ = this.data.getEmployee().pipe(share());
  }

  searchByUsername(username) {
    console.log(username);
    if (this.users$.length > 0) {
      this.users$.length = 0;
    }
    if (this.error.length > 0) {
      this.error = '';
    }
    this.data.getEmployeeByUsername(username).subscribe(
      data => {
        this.user$ = data;
        this.users$.push(this.user$);
        console.log(this.users$);
      },
      error => {
        console.log('error');
        // Store the attempted URL for redirecting
        this.handleAuthError(error, username);
      }
    );

  }

  searchByGuild(guild) {
    console.log(guild);
    if (this.users$.length > 0) {
      this.users$.length = 0;
    }

    this.data.getEmployeesByGuild(guild).subscribe(
      data => {
        this.users$ = data;
        console.log(this.users$);
      }
    );
  }

  searchByFilters(name, guild, jobClass) {
    if (this.users$.length > 0) {
      this.users$.length = 0;
    }

    this.data.getEmployeesByFilters(name, guild, jobClass).subscribe(
      data => {
        this.users$ = data;
        console.log(this.users$);
      }
    );
  }

  private handleAuthError(err: any, username): Observable<any> {
    // handle your auth error or rethrow
    if (err.status === 404 || err.status === 500) {
      // navigate /delete cookies or whatever
      console.log('handled error ' + err.status);
      this.setError('Could not find the employee ' + username + '. Try using other search filters.');
    }
    throw err;
  }

  setError(error) {
    this.error = error;
  }

}
