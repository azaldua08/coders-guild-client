import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelLeaderboardComponent } from './level-leaderboard/level-leaderboard.component';
import { BadgeLeaderboardComponent } from './badge-leaderboard/badge-leaderboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { SearchPortalComponent } from './search-portal/search-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'home',
    component: LevelLeaderboardComponent,
    canActivate: [AuthGuard]
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
    path: 'admin-portal/create-emp',
    component: AdminPortalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-portal/search-emp',
    component: SearchPortalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee-portal/:id',
    component: EmployeePortalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
