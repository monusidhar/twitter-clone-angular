import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'twitter-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      address3: ['', Validators.required],
      checkbox: ['', Validators.required],
      gender: ['male', Validators.required],
      additionalRows: this.fb.array([]) as FormArray,
    })
  }

  addRow(){
    let additionalRow = this.fb.group({
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      address3: ['', Validators.required],
      checkbox: ['', Validators.required],
      gender: ['male', Validators.required],
    });
    this.additionalRows.push(additionalRow);
  }

  onFormSubmit(){
  
    if(this.userForm.invalid){
      console.log('Form is invalid');
    }else{
      console.log(this.userForm.value);
    }
  }

  get additionalRows(): FormArray{
    return this.userForm.get('additionalRows') as FormArray;
  }

}
