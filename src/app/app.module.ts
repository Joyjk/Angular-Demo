import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsdBdtPipe } from './pipes/usd-bdt.pipe';
import { FormDataCompComponent } from './form-data-comp/form-data-comp.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RedELDirective } from './red-el.directive'



@NgModule({
  declarations: [
    AppComponent,
    UsdBdtPipe,
    FormDataCompComponent,
    RedELDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
