import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-com',
  templateUrl: './large-com.component.html',
  styleUrls: ['./large-com.component.css']
})
export class LargeComComponent implements OnInit {

  constructor() { }
  @Input() item2:{name:string, address:string, phone:any, accounts:any}={name:'', address:'',phone:0,accounts:[]}
  ngOnInit(): void {
  }

}
