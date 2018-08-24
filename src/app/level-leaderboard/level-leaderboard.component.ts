import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, of } from 'rxjs';
import { share, merge, startWith, scan } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-level-leaderboard',
  templateUrl: './level-leaderboard.component.html',
  styleUrls: ['./level-leaderboard.component.css']
})
export class LevelLeaderboardComponent implements OnInit {
  users$: Object[];
  employee$: Observable<Object>;
  employeeSubj = new Subject();
  mergedObj: Observable<any>;
  mock$: Observable<Object[]>;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEmployeesByLevel().subscribe(
      data => this.users$ = data
    );
    this.employee$ = this.data.getEmployee().pipe(share());



     this.mockDeleteObservable();
  }

  deleteUser2(id) {
    this.employeeSubj.next({ op: 'delete', id: id });
  }

  mockDeleteObservable() {
    this.mock$ = of([
      { id: 118, name: 'Tae Korean', username: 'taeko12', experience: 80, level: 30, jobClass: 'Actor', status: 'Active' },
      { id: 119, name: 'Williams', username: 'wil23', experience: 80, level: 30, jobClass: 'Actor', status: 'Active' }
    ]);


    this.mergedObj = this.mock$.pipe(merge(this.employeeSubj), startWith([]),
      scan((acc, val) => {
        if (val.op && val.op === 'delete') {
          const index = acc.findIndex((elt) => elt.id === val.id);
          acc.splice(index, 1);
          return acc;
        } else {
          return acc.concat(val);
        }
      }));

    this.mergedObj.subscribe(val => console.log(val));
    // this.employeeSubj.next({
    //   op: 'delete', id: 119
    // });
  }

  deleteUser(id, user) {
    let index: number;
    index = this.users$.indexOf(user);
    this.data.deleteEmployee(id).subscribe(
      () => this.users$.splice(index, 1)
    );
  }

}
