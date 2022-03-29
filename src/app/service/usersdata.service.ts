import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http: HttpClient) {

  }

  productApiCall() {
    return this.http.get("http://localhost:11793/api/products/");
  }


  saveDemo(data: any) {
    return this.http.post("http://localhost:11793/api/Products/added", data)
  }

  uploadFile(file:any){
    return this.http.post("http://localhost:11793/api/Products/FIKDALImport",file)
  }


  users() {
    return [
      { name: 'aaa', age: 32 },
      { name: 'ads', age: 37 },
      { name: 'acfc', age: 35 },
      { name: 'acsd', age: 34 }
    ]
  }

}
