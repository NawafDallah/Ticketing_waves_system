import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { ManageEmployeeComponent } from 'src/app/View/screen/managerPage/manage-employee/manage-employee.component';
import { SharedTableComponent } from '../../tables/shared-table/shared-table.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerService } from 'src/app/controller/service/manager.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  form?: FormGroup;
  //make dialoge responsive
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 2)));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialogrefEmployee: MatDialogRef<ManageEmployeeComponent>,
    private dialogrefClient: MatDialogRef<SharedTableComponent>,
    @Inject(MAT_DIALOG_DATA) public row: any,
    private managerService: ManagerService,
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl({ value: null, disabled: false }, [
        Validators.required,
        Validators.minLength(8),
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      id : new FormControl(null),
      phoneNumber: new FormControl(null),
      address: new FormControl(null),
      dateOfBirth: new FormControl(null, Validators.required),
    });
    //debugger;
    if (this.row != null) {
      this.populateForm();
      this.form!.get('Email')?.disable();
      this.form!.get('Password')?.disable();
    }
  }

  populateForm() {
    this.form?.patchValue({
      Email: `${this.row.email}`,
      name: `${this.row.name}`,
      id: `${this.row.id}`,
      phoneNumber: `${this.row.phoneNumber}`,
      address: `${this.row.address}`,
      dateOfBirth: `${this.row.dateOfBirth}`,

    });
  }

  onCancel() {
    this.form?.reset();
    this.dialogrefEmployee.close();
    this.dialogrefClient.close();
  }

  onAddEmployee(emp: any) {
    if (this.form!.valid) {
      this.managerService.addEmployee(emp);
      this.onCancel();
    }
  }

  onEditEmployee(emp: any){
    if (this.form!.valid) {
      this.managerService.editEmployee(emp);
      this.onCancel();
    }
  }

}
