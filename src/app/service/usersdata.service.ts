import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http:HttpClient) 
  { 

  }

  producyApiCall()
  {
    return this.http.get("http://localhost:11793/api/products/");
  }

  users()
  {
    return [
      {name: 'aaa',age:32},
      {name: 'ads',age:37},
      {name: 'acfc',age:35},
      {name: 'acsd',age:34}
    ]
  }

}
