import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-badge-leaderboard',
  templateUrl: './badge-leaderboard.component.html',
  styleUrls: ['./badge-leaderboard.component.css']
})
export class BadgeLeaderboardComponent implements OnInit {
  users$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEmployeesByBadge().subscribe(
      data => this.users$ = data
    );
  }

}
