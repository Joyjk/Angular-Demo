import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../../service/usersdata.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private userdata:UsersdataService) { 
    
  }

  ngOnInit(): void {
  }

  selectedFile:any;

  onSelectedFile(e:any)
  {
    this.selectedFile = e.target.files[0];
  }

  getformSubmitData()
  { 
    var formData = new FormData();
    formData.append("file",this.selectedFile)

      this.userdata.uploadFile(formData).subscribe((res)=>{
        console.warn(res)
      })
  }

}
