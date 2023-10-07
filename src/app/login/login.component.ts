import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'twitter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  userData : FormGroup= new FormGroup({});
  errorMessage: string = '';
  constructor(private router: Router, private authService: AuthService, private fb:FormBuilder){
    this.createForm();
  }

  private createForm(){
    this.userData = this.fb.group({
     username: ['', [Validators.required]],
     password: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/dashboard']);
      // return false;
  }
  }

  login(){
    this.isLoading = true;
    this.authService.login(this.userData).subscribe(res=> {
      if(res && res.success){
        console.log(res.payload);
        this.authService.user.next(res.payload.user);
        localStorage.setItem('user', JSON.stringify(res.payload.user));
        localStorage.setItem('token', res.payload.token);
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }else{
        this.errorMessage = 'username or password is incorrect';
        this.isLoading = false;
      }
    }, error=> {
      console.log(error);
      this.isLoading = false;
    });

    // this.http.get('http://localhost/thread-clone/backend/web/index.php?r=api/default', { withCredentials: true })
    // .subscribe(
    //     response => {
    //         console.log(response);
    //         this.isLoading=false;
    //     },
    //     error => {
    //         console.log(error);
    //         console.log('Error occurred');
    //         this.isLoading=false;
    //     }
    // );

  }

}
