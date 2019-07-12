import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) {

  }
   login(logindetails){
      return this.http.post('https://aegonplatform-api.herokuapp.com/api/customers/login',logindetails)
   }

}

