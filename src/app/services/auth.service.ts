import { User } from './../auth/userModel';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Add the RxJS Observable operators we need in this app.
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { BaseService } from './base.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService extends BaseService {


    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();
  

    private loggedIn = false;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) {
        super();
        this.loggedIn = !!localStorage.getItem('auth_token');
        this._authNavStatusSource.next(this.isLoggedIn());
    }

    login(userId, password) {
        let apiUrl=environment.apiUrl;
        let httpOptions: HttpHeaders = new HttpHeaders();
        httpOptions = httpOptions.set("Content-Type", "application/json");
        const user = new User(userId, password);
        localStorage.removeItem("auth_token");
        return this.http
            .post(
                apiUrl + 'auth/token',
                user)
            .subscribe(
                (val)=> this.setSession(val,userId),
                response => {
                    console.log("POST call in error", response);
                },
                () => {
                    console.log("The POST observable is now completed.");
                });



            //.do(res => this.setSession)
            //.shareReplay();
    }

    private setSession(authResult,userId) {
        authResult["userId"]=userId;
        localStorage.setItem('auth_token', JSON.stringify(authResult));
        let res=this.isLoggedIn();
        this._authNavStatusSource.next(res);
        if (res)
            this.router.navigate(['employees']);
    }


    isLoggedIn() {
        const token = localStorage.getItem('auth_token');
        // Check whether the token is expired and return
        // true or false
        let res:boolean =false;
        try {
            res=!this.jwtHelper.isTokenExpired(token);
            return res;
           }
        catch {
          return false;
        }
    }
    logout() {
        localStorage.removeItem("auth_token");
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
        this.router.navigate(['login']);
    }

}