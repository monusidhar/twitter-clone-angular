import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environments } from "environment/environment";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DashboardService{
    constructor(private http: HttpClient){

  }

  getTweets() {
    const userString = localStorage.getItem('user');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
    const params = { userId: JSON.parse(userString ? userString : '').id };
    const requestOptions = {
      params,
      headers,
      withCredentials: true, // Move this option here
    };
  
    this.http.get(environments.appUrl + 'api/tweet/fetch-tweets', requestOptions).subscribe(res => {
      return res;
    });
  }
  

}