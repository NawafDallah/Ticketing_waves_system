import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { EmployeeService } from 'src/app/controller/service/employee.service';
import { SharedTableComponent } from '../../tables/shared-table/shared-table.component';
import { ClientService } from 'src/app/controller/service/client.service';

@Component({
  selector: 'app-comment-client',
  templateUrl: './comment-client.component.html',
  styleUrls: ['./comment-client.component.css'],
})
export class CommentClientComponent {
  form?: FormGroup;
  //make dialoge responsive
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 1)));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private dialogrefClient: MatDialogRef<SharedTableComponent>,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public row: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', Validators.required],
      owner: [0],
    });
  }

  onComment(comment: any) {
    if (this.form!.valid) {
      this.clientService.addCommentToTicket(this.row, comment);
      this.onCancel();
    }
  }

  onCancel() {
    this.form?.reset();
    this.dialogrefClient.close();
  }
}

