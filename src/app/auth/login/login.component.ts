import { AuthService } from '../../services/auth.service';
import { User } from '../userModel';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
 

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: User = { userId: '', password: '' };



  constructor(
    private fb: FormBuilder,
    private authService: AuthService
   
  ) { }

  ngOnInit() {
    this.form = this.fb.group({    
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

 


  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  login(f: NgForm) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (f.valid) {
      this.authService.login(f.value.userId, f.value.password);
    }
  }
}