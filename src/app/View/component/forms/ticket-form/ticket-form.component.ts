import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { SharedTableComponent } from '../../tables/shared-table/shared-table.component';
import { TicketService } from 'src/app/controller/service/ticket.service';
import { Product } from 'src/app/model/product';
import { ClientService } from 'src/app/controller/service/client.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  form?: FormGroup;
  //make dialoge responsive
  cols = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => (matches ? 1 : 1)));
  //public status = this.ticketData.row.status;
  products: Product[] = this.ticketService.getProduct();
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public row: any,
    private breakpointObserver: BreakpointObserver,
    private dialogrefClient: MatDialogRef<SharedTableComponent>,
    private ticketService: TicketService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      productID: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.populateForm();
  }

  populateForm() {
    this.form?.patchValue({
      title: `${this.row.title}`,
      productID: `${this.row.productName}`,
      description: `${this.row.description}`,
    });
  }

  onEditTicket(comment: any) {
    if (this.form!.valid) {
      this.clientService.editTicket(this.row, comment);
      this.onCancel();
    }
  }

  onCancel() {
    this.form?.reset();
    this.dialogrefClient.close();
  }
}
