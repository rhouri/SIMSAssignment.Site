import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from './employee.model';
import { employeeService } from '../services/employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class employeesComponent implements OnInit {
  selectedemployee: Employee;

  constructor(private employeeService: employeeService) { }

  ngOnInit()
  {
    this.employeeService.employeeSelect.subscribe((employee: Employee) =>
    {
      this.selectedemployee = employee;
    });
  }
  employee: Employee;
}
