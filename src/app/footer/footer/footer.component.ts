import { Component, OnInit } from '@angular/core';
import { UsersdataService } from 'src/app/service/usersdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users:any

  constructor(private user:UsersdataService ) {
      this.users = user.users()
   }

  ngOnInit(): void {
  }

}
