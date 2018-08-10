import { OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export abstract class BaseService implements OnInit {  
    constructor() { }
    protected baseUrl:string;

    ngOnInit() {
     this.baseUrl = environment.apiUrl; 
    }

    protected handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');

        // either applicationError in header or model error in body
        if (applicationError) {
          return Observable.throw(applicationError);
        }

        var modelStateErrors: string = '';
        var serverError = error.json();

        if (!serverError.type) {
          for (var key in serverError) {
            if (serverError[key])
              modelStateErrors += serverError[key] + '\n';
          }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return Observable.throw(modelStateErrors || 'Server error');
    }
}