import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { employeeService } from '../../services/employee.service';
import { ActivatedRoute } from '@angular/router';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class employeesDetailComponent implements OnInit {

  constructor(private employeeService: employeeService, private route: ActivatedRoute) { }
  employee: Employee;
  id: number;
  msgs: Message[] = [];
  ngOnInit() {
    this.route.paramMap.subscribe(
      (params => {
        this.id = +params.get('id');
        this.employeeService.getEmployee(this.id).subscribe(
          (data:Employee)=>{
            this.employee= data;
            console.log(this.employee);
          });
        }
      )
   );
  }

  addEmployee(){
      this.msgs.push({severity:'warning', summary: 'Warning', detail:"Add Employee Not Implemented"});
  }

  editEmployee(){}
  deleteEmployee(){
    this.msgs.push({severity:'warning', summary: 'Warning', detail:"Delete Employee Not Implemented"});
  }

}
