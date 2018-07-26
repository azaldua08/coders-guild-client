import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelLeaderboardComponent } from './level-leaderboard.component';

describe('LevelLeaderboardComponent', () => {
  let component: LevelLeaderboardComponent;
  let fixture: ComponentFixture<LevelLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
