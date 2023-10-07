import { HttpClient, HttpHeaders  } from "@angular/common/http";
import {FormGroup} from '@angular/forms';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs';
import { environments } from "environment/environment";
import { Route, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = new BehaviorSubject<any>(null);
    constructor(private http: HttpClient, private router: Router){
          if(localStorage.getItem('user')){
            this.user.next(localStorage.getItem('user'));
          }
    }

    login(userCredentials: FormGroup): Observable<any> {
      const url = environments.appUrl+'api/login';
      
      const body = {
        username: userCredentials.value.username,
        password: userCredentials.value.password
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
  
      return this.http.post(url, body, { headers, withCredentials: true });
    }

    isAuthenticated(): boolean {
      return !!this.user.getValue(); 
    }

    logout(){
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }



}