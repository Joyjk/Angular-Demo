import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page5Component } from './page5/page5.component'
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';


const routes: Routes = [
 // {
    // path: 'moderator', children: [
      { path: 'page5', component: Page5Component },
      { path: 'page6', component: Page6Component },
      { path: 'page7', component: Page7Component },
      { path: 'page8', component: Page8Component },
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule { }
