import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'twitter-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading: boolean = false;
  signupData: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder){
    this.createSignupForm();
  }

  createSignupForm(){
    this.signupData = this.fb.group({
      'firstName': ['', [Validators.required]], 
      'lastName': ['', [Validators.required]], 
      'username': ['', [Validators.required]], 
      'password': ['', [Validators.required]], 
      'email': ['', [Validators.required, Validators.email]], 
    })
  }

  onSubmit(){
    console.log(this.signupData);
  }
}
