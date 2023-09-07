import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeFormComponent } from 'src/app/View/component/forms/employee-form/employee-form.component';
import { Manager } from 'src/app/model/manager';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css'],
})
export class ManageEmployeeComponent {
  role: String = 'manageEmployee';
  dataSource?: MatTableDataSource<Manager>;
  columns: String[] = [
    '#',
    'name',
    'mobile',
    'birthDate',
    'address',
    'active',
    'action',
  ];
  constructor(private dialog: MatDialog) {}

  //open add employee dialog
  onOpenAddEmployeeDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = '80%';
    this.dialog.open(EmployeeFormComponent, dialogConfig);
  }
}
