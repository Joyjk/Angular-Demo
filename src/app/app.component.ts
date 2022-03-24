import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  displayValue=''

  getInputValue(val:any){
    
    console.warn(val)

    this.displayValue=val
  }

  count=0
  counter(val:string){
    if(val=='add'){
      this.count++
    }
    else{
      this.count--
    }
      
  }

  name = "Any Name"
  disable = false

  showData = true
  showData2 = 'abc'

  color='green'
  bgc = 'blue'

  userArr = ['aaa', 'aab', 'aba', 'abb', 'baa', 'bba', 'bbb']

  userDetails = [
    {name: 'abc', address:'dhk', phone:'018', accounts:['facebook','gmail','yahoo']},
    {name: 'def', address:'ctg', phone:'017', accounts:['facebook','gmail','yahoo']},
    {name: 'ghi', address:'rhj', phone:'016', accounts:['facebook','gmail','yahoo']},
    {name: 'jkl', address:'khu', phone:'015', accounts:['facebook','gmail','yahoo']},
  ]
  userValue:any={}

  updateColor(){
    this.color='red'
    this.bgc = 'pink'
  }

  getData2(val:NgForm){
    console.warn(val)
    this.userValue=val
  }

  display = true

  togg()
  {
    this.display=!this.display
  }
 
  updateBtn()
  {
    this.count = Math.floor(Math.random()*1000)
  }

}
