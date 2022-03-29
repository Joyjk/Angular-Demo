import { Component } from '@angular/core';
// import { threadId } from 'worker_threads';
import { UsersdataService } from './service/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPart4';


  users: any
  productApiData: any

  constructor(private userdata: UsersdataService) {
    console.warn(userdata.users())
    this.users = userdata.users()
    //this.productApiData = userdata.producyApiCall();
    //console.warn(userdata.producyApiCall())

    userdata.productApiCall().subscribe((data) => {
      console.warn("users Data: ", data)
      this.productApiData = data
    })

    console.warn(this.productApiData)



  }


  getformSubmitData(data: File) {
    //console.warn(data)

    this.userdata.saveDemo(data).subscribe((res)=>{
      console.warn(res)
    })

  }

  


}
