import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs';
import { SharedTableComponent } from '../../tables/shared-table/shared-table.component';
import { ManagerService } from 'src/app/controller/service/manager.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-assign-form',
  templateUrl: './assign-form.component.html',
  styleUrls: ['./assign-form.component.css'],
})
export class AssignFormComponent implements OnInit {
  form?: FormGroup;
  //make dialoge responsive
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 1)));

  arrEmployee?: Employee[];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private dialogrefClient: MatDialogRef<SharedTableComponent>,
    private manageService: ManagerService,
    @Inject(MAT_DIALOG_DATA) public ticket: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      employee: [null, Validators.required],
    });
    this.getAllEmplyee();
  }

  getAllEmplyee() {
    this.manageService.getEmployeeToAssignTicket().subscribe((response) => {
      this.arrEmployee = response;
      console.log(this.arrEmployee);
    });
  }

  onAssign() {
    if (this.form?.get('employee')?.value) {
      let selectedEmployeeId = this.form?.get('employee')?.value;
      console.log('Selected Employee ID:', selectedEmployeeId);
      this.manageService.assignTicket(this.ticket, selectedEmployeeId);
      this.onCancel(); 
    }
  }

  onCancel() {
    this.form?.reset();
    this.dialogrefClient.close();
  }
}
