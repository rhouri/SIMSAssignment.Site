import { AuthService } from './services/auth.service';
import { AuthGuard } from './authGuard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.materialModule';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { employeesComponent } from './employees/employee.component';
import { employeesListComponent } from './employees/employee-list/employee-list.component';
import { employeesDetailComponent } from './employees/employee-detail/employee-detail.component';
import { AppRoutingModule } from './app.routing.module';
import { employeeStartComponent } from './employees/employee-start/employee-start.component';
import { employeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { DisplayfieldComponent } from './shared/displayfield/displayfield.component';
import { LoginComponent } from './auth/login/login.component';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      var t= localStorage.getItem('auth_token');
      try
        {
        t=JSON.parse(t);
        return t["token"];
        }
        catch {
          return "";
        }
    },
    whitelistedDomains: ['localhost:44380'],
    blacklistedRoutes: ['localhost:3001/auth/']
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    employeesComponent,
    employeesListComponent,
    employeesDetailComponent,
    employeeStartComponent,
    employeeEditComponent,
    DisplayfieldComponent,
    LoginComponent,
   
  ],
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide:JWT_OPTIONS,
        useFactory: jwtOptionsFactory
      }
    })
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
