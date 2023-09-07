import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ManagerService } from 'src/app/controller/service/manager.service';
import { Manager } from 'src/app/model/manager';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-manage-ticket',
  templateUrl: './manage-ticket.component.html',
  styleUrls: ['./manage-ticket.component.css'],
})
export class ManageTicketComponent {
  role: String = 'manageTicket';
  dataSource?: MatTableDataSource<Manager>;
  columns: String[] = [
    '#',
    'id',
    'title',
    'clientName',
    'empName',
    'product',
    'stutas',
    'action',
  ];
  constructor() {}

}
