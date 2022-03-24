import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms'

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

  arr:string[] = ["hello","avx"]

  putData(data:number[])
  {
      return data[0]*34
  }
 
  getAll()
  {
      this.putData([21])
  }

  today = Date()

  makeCaps(str: string)
  {
    return str.toUpperCase();
  }

  userDetails = [
    {name: 'abc', address:'dhk', phone:'018', accounts:['facebook','gmail','yahoo']},
    {name: 'def', address:'ctg', phone:'017', accounts:['facebook','gmail','yahoo']},
    {name: 'ghi', address:'rhj', phone:'016', accounts:['facebook','gmail','yahoo']},
    {name: 'jkl', address:'khu', phone:'015', accounts:['facebook','gmail','yahoo']},
  ]

  userLogin(data:any)
  {
      console.warn(data)
  }

  loginDemoReactive = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('')
  })

  loginUserDemo(){
    console.warn(this.loginDemoReactive.value)
  }

  get nameValidator(){
    return this.loginDemoReactive.get('name')
  }


}
