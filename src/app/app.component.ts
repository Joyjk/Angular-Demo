import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  getName(name: any, num: Number, text: string) {
    alert("Function " + name + " " + num + " " + text)
  }
  getData(val:any){
    console.log(val)
  }

}
