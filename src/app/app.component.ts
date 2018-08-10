import { Observable } from 'rxjs/Rx';
import { AuthService } from './services/auth.service';
import { Component,OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  constructor(private authService: AuthService) { }
  isLoggedIn$: Observable<boolean>; 
  
  ngOnInit() {
    this.isLoggedIn$ = this.authService.authNavStatus$; 
  }
}