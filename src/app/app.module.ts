import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { LevelLeaderboardComponent } from './level-leaderboard/level-leaderboard.component';
import { BadgeLeaderboardComponent } from './badge-leaderboard/badge-leaderboard.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { FormsModule } from '@angular/forms';

import { NgbDateFRParserFormatter } from './ngb-date-fr-parser-formatter';
import { AvatarModalComponent } from './avatar-modal/avatar-modal.component';
import { SearchPortalComponent } from './search-portal/search-portal.component';
import { BulkCreateComponent } from './bulk-create/bulk-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeaderboardComponent,
    AdminPortalComponent,
    EmployeePortalComponent,
    LevelLeaderboardComponent,
    BadgeLeaderboardComponent,
    LoginFormComponent,
    AvatarModalComponent,
    SearchPortalComponent,
    BulkCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    },
    {
      provide: NgbDateFRParserFormatter,
      useClass: NgbDateFRParserFormatter
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
