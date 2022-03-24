import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NoPageComponent } from './no-page/no-page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';

const routes: Routes = [
  {
    path:'page1',
    component:Page1Component
  },
  {
    path:'page2',
    component:Page2Component
  },
  {
    path:'page3',
    component:Page3Component,
    children:[
      {
        path:'aboutme',
        component:AboutMeComponent
      },
      {
        path:'aboutus',
        component:AboutUsComponent
      },

    ]
  },
  {
    path:'page4/:id',
    component:Page4Component
  },
  {
    path:'**',
    component:NoPageComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
