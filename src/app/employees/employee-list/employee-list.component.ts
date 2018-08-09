import { Component, OnInit,Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { employeeService } from '../../services/employee.service';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class employeesListComponent implements OnInit {
  employees: Employee[];
  cols: any[];
  selectedEmployee : Employee;
  constructor(private employeeService: employeeService, private router: Router) { }

  ngOnInit()
  {
    
    this.cols = [
      { field: 'lastName', header: 'Last Name' ,width: '25%'},
      {field: 'firstName', header: 'First Name' ,width: '20%'},
      {field : 'middleName' , header: 'Middle',width: '5%'},
      { field: 'email', header: 'Email' ,width: '35%'},
      { field: 'department', header: 'Department',width: '15%' }
  ];
    this.employeeService.getEmployeesFromServer().subscribe(
      (data:Employee[])=>{
        this.employees= data;
        console.log(this.employees[0]);
      });
    }

    onRowSelect(event) {
      this.router.navigate(['/employees', event.data.id]);
    }
  }


 
