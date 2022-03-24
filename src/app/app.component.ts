import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Angular';
  name:any;

  getDat(item:any)
  {
    console.log(item)
  }

}
