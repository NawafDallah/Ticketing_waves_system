import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs';
import { ClientTableComponent } from 'src/app/View/screen/ClientPage/client-table/client-table.component';
import { ClientService } from 'src/app/controller/service/client.service';
import { TicketService } from 'src/app/controller/service/ticket.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-create-ticket-form',
  templateUrl: './create-ticket-form.component.html',
  styleUrls: ['./create-ticket-form.component.css'],
})
export class CreateTicketFormComponent implements OnInit {
  form?: FormGroup;
  userInfo = JSON.parse(localStorage.getItem('userInfo')!);  
  clientId = this.userInfo.id;
  //make dialoge responsive 
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 1)));

  products: Product[] = this.ticketService.getProduct();
  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private dialogrefClient: MatDialogRef<ClientTableComponent>,
    private clientService: ClientService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      productID: ['', Validators.required],
      description: ['', Validators.required],
      comments: [''],
      //file: ['', Validators.required],
    });
  }

  onTicketCreate(ticket: any) {
    if (this.form!.valid) {
      console.log(this.userInfo);
      ticket.clientId = this.clientId;
      this.clientService.createTicket(ticket);
      this.onCancel();
    }
  }

  onCancel() {
    this.form?.reset();
    // this.dialogrefEmployee.close();
    this.dialogrefClient.close();
  }
}
