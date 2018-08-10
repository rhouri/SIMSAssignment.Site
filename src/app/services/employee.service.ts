import { Injectable,EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Employee } from "../employees/employee.model";
import { BaseService } from "./base.service";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class employeeService  extends BaseService
{
  private employees: Employee[] = [];
 

  constructor(private http: HttpClient)  {super();}

  baseUrl= environment.apiUrl;
  // an employee has been selected by the UI
  employeeSelect = new EventEmitter<Employee>();
  
// Get an employee list
getEmployeesFromServer() {
  return this.http.get<Employee[]>(this.baseUrl+'Employees/list');
}

  // Get employee record by id
getEmployee(id:number)
    {
      return this.http.get<Employee>(this.baseUrl+'Employees/'+id);
    }

}
