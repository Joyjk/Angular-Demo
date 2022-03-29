import { Injectable } from '@angular/core';

import {dataType} from '../app/user'
// interface dataType{
//   name:string,
//   id:number,
//   nationality: string,
//   address:any
// }

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
    const data:dataType = {
      name:"acv",
      id:134,
      nationality:"true",
      address:1232
    }
  }
}
