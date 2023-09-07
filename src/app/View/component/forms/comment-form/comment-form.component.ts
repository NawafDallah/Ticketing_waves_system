import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerService } from 'src/app/controller/service/manager.service';
import { SharedTableComponent } from '../../tables/shared-table/shared-table.component';
import { EmployeeService } from 'src/app/controller/service/employee.service';
import { ClientService } from 'src/app/controller/service/client.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css'],
})
export class CommentFormComponent {
  form?: FormGroup;
  //make dialoge responsive
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 1)));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private dialogrefClient: MatDialogRef<SharedTableComponent>,
    private employeeService: EmployeeService,
    private ClientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public row: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', Validators.required],
      owner: [1]
    });
  }


  onComment(comment: any) {
    if (this.form!.valid) {
     this.employeeService.addCommentToTicket(this.row, comment);
      this.onCancel();
    }
  }

  onCancel() {
    this.form?.reset();
    this.dialogrefClient.close();
  }
}
