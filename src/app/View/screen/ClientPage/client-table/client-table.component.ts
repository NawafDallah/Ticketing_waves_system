import { Component } from '@angular/core';
import { ClientService } from 'src/app/controller/service/client.service';
import { Client } from 'src/app/model/client';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateTicketFormComponent } from 'src/app/View/component/forms/create-ticket-form/create-ticket-form.component';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css'],
})
export class ClientTableComponent {
  role: String = 'ticketClient';
  dataSource?: MatTableDataSource<Client>;
  columns: String[] = ['#', 'id', 'title', 'stutas', 'empName', 'action'];
  ticketArray = this.clients.client.ticket!;
  constructor(private clients: ClientService, private dialog: MatDialog) {
    // this comes from dataBase
    this.dataSource = new MatTableDataSource<any>(this.ticketArray);
  }

  CreateTicket() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = '45%';
    this.dialog.open(CreateTicketFormComponent, dialogConfig);
  }
}
