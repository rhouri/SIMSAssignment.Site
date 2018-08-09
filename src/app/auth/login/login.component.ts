import { AuthService } from '../../services/auth.service';
import { User } from '../userModel';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  login({ value, valid }: { value: User, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.authService.login(value.userId, value.password);
    }
  }
}