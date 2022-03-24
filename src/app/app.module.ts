import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsdBdtPipe } from './pipes/usd-bdt.pipe';
import { FormDataCompComponent } from './form-data-comp/form-data-comp.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RedELDirective } from './red-el.directive';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component'



@NgModule({
  declarations: [
    AppComponent,
    UsdBdtPipe,
    FormDataCompComponent,
    RedELDirective,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
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
