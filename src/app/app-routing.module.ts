import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelLeaderboardComponent } from './level-leaderboard/level-leaderboard.component';
import { BadgeLeaderboardComponent } from './badge-leaderboard/badge-leaderboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'home',
    component: LevelLeaderboardComponent
  },
  {
    path: 'leaders-level',
    component: LevelLeaderboardComponent
  },
  {
    path: 'leaders-badges',
    component: BadgeLeaderboardComponent
  },
  {
    path: 'admin-portal',
    component: AdminPortalComponent
  },
  {
    path: 'employee-portal',
    component: EmployeePortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
