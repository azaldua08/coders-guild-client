import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { LevelLeaderboardComponent } from './level-leaderboard/level-leaderboard.component';
import { BadgeLeaderboardComponent } from './badge-leaderboard/badge-leaderboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeaderboardComponent,
    AdminPortalComponent,
    EmployeePortalComponent,
    LevelLeaderboardComponent,
    BadgeLeaderboardComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
