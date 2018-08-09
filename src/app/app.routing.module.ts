import { AuthGuard } from './authGuard';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { employeesComponent } from './employees/employee.component';
import { employeeStartComponent } from './employees/employee-start/employee-start.component';
import { employeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { employeesDetailComponent } from './employees/employee-detail/employee-detail.component';
import { LoginComponent } from "./auth/login/login.component";

const appRoutes: Routes =
    [
        { path: '', redirectTo: '/employees', pathMatch: 'full'},
        { path: 'employees', component: employeesComponent, canActivate:[AuthGuard],
             children: [
            { path: '', component: employeeStartComponent, pathMatch: 'full'  },
            {path: ":id",component:employeesDetailComponent },
            {path: ":id/edit",component:employeeEditComponent},
            ]
         },
         {path: 'login', component:LoginComponent}
       
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
            ,{enableTracing: true}
        ), 

    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}