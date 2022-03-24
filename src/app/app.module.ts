import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';

import {UserAuthModule} from './user-auth/user-auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   
import { MatSliderModule } from '@angular/material/slider';
import { ChildComponent } from './child/child.component';
import { LargeComComponent } from './large-com/large-com.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDataComponent,
    StudentListComponent,
    ChildComponent,
    LargeComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
