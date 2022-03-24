import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApisDataService {

  constructor(private http:HttpClient) { }

  products()
  {
    return this.http.get("http://localhost:11793/api/products/")
  }

  saveProducts(data:any){
    return this.http.post('http://localhost:11793/api/products/Import',data)
  }


}
