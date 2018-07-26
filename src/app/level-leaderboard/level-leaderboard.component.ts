import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-level-leaderboard',
  templateUrl: './level-leaderboard.component.html',
  styleUrls: ['./level-leaderboard.component.css']
})
export class LevelLeaderboardComponent implements OnInit {
  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEmployeesByLevel().subscribe(
      data => this.users$ = data
    );
  }

}
