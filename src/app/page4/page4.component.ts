import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

    userId:any =0

  ngOnInit(): void {
    console.warn("page id is: "+this.route.snapshot.paramMap.get('id'))
    this.userId = this.route.snapshot.paramMap.get('id')
  }

}
