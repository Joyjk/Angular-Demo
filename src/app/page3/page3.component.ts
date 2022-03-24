import { Component, OnInit } from '@angular/core';
import { UserdataService} from '../userdata.service'

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  users:any
  constructor(private userDetails:UserdataService) {
    this.users = userDetails.users();
   }

  ngOnInit(): void {
  }
  // userDetails = [
  //   {name: 'abc', address:'dhk', phone:'018', accounts:['facebook','gmail','yahoo']},
  //   {name: 'def', address:'ctg', phone:'017', accounts:['facebook','gmail','yahoo']},
  //   {name: 'ghi', address:'rhj', phone:'016', accounts:['facebook','gmail','yahoo']},
  //   {name: 'jkl', address:'khu', phone:'015', accounts:['facebook','gmail','yahoo']},
  // ]
}
