import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
@Component(
  {
    selector: 'app-header',
    templateUrl: '../header/header.component.html',
    styleUrls: ['../header/header.component.css']
  })

export class HeaderComponent implements OnInit {

  userId:string='Not Authenticated';
  isLoggedIn$:boolean;

constructor(private authService: AuthService) { }

ngOnInit() {
  this.authService.authNavStatus$.subscribe( (x)=>{
    this.isLoggedIn$=x;
    let t = localStorage.getItem('auth_token');
    try
      {  
      t = JSON.parse(t);
       this.userId = t["userId"];
      }
    catch {
    this.userId="Unknown";  
     }
  });

}

onLogout(){
  this.authService.logout();
}
}
