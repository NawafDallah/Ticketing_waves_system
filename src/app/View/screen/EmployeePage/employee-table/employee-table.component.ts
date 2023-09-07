import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/controller/service/employee.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent {
  role: String = 'ticketEmployee';
  dataSource?: MatTableDataSource<Employee>;
  columns: String[] = [
    '#',
    'id',
    'title',
    'clientName',
    'stutas',
    'close',
    'action',
  ];
  ticketArray = this.employees.employee.ticket!;
  constructor(private employees: EmployeeService) {
    // this comes from dataBase
    this.dataSource = new MatTableDataSource<any>(this.ticketArray);
  }
}
