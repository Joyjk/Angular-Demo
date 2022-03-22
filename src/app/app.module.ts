import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { StudentListComponent } from './student-list/student-list.component';

import {UserAuthModule} from './user-auth/user-auth.module';   

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDataComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
