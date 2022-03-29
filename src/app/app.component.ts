import { Component } from '@angular/core';

import {dataType} from '../app/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-p3';

  getData(){
    const data:dataType = {
      name:"acv",
      id:134,
      nationality:"true",
      address:1232
    }
  }

}
