import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedTableComponent } from '../../tables/shared-table/shared-table.component';
import { map } from 'rxjs';
import { TicketService } from 'src/app/controller/service/ticket.service';
import { Product } from 'src/app/model/product';
import { EmployeeService } from 'src/app/controller/service/employee.service';
import { Comment } from 'src/app/model/comment';
import { ClientService } from 'src/app/controller/service/client.service';

@Component({
  selector: 'app-view-ticke-form',
  templateUrl: './view-ticke-form.component.html',
  styleUrls: ['./view-ticke-form.component.css'],
})
export class ViewTickeFormComponent implements OnInit {
  comments: any;
  isLoadeng: boolean = false;
  form?: FormGroup;
  //make dialoge responsive
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 1)));

  products: Product[] = this.ticketService.getProduct();
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public row: any,
    private breakpointObserver: BreakpointObserver,
    private dialogrefClient: MatDialogRef<SharedTableComponent>,
    private ticketService: TicketService,
    private employeeService: EmployeeService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      productID: ['', Validators.required],
      description: ['', Validators.required],
      comments: [''],
    });
    this.populateForm();
    this.form!.get('title')?.disable();
    this.form!.get('productID')?.disable();
    this.form!.get('description')?.disable();
    this.form!.get('comments')?.disable();
    this.getComments();
  }

  populateForm() {
    this.form?.patchValue({
      title: `${this.row.title}`,
      productID: `${this.row.productName}`,
      description: `${this.row.description}`,
      comments: `${this.row.comments}`,
      //file: `${this.row.file}`,
    });
  }

  onCancel() {
    this.form?.reset();
    // this.dialogrefEmployee.close();
    this.dialogrefClient.close();
  }

  getComments() {
    this.isLoadeng = true;
    this.employeeService.getCommentOfTickets(this.row).subscribe(
      (response) => {
        console.log('get comment seccussfully', response);
        this.comments = response;
        console.log('inside subscribe', this.comments);
      },
      (error) => {
        console.log('get comment feild', error);
      }
    );
    this.isLoadeng = false;
    console.log('out side', this.comments);
  }

  
}
