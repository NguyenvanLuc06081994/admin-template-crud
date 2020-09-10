import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { MasterComponent } from './layout/master/master.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashBoardComponent } from './layout/dash-board/dash-board.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent,
    NavbarComponent,
    DashBoardComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
