import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Manager } from 'src/app/model/manager';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.css'],
})
export class ManageClientComponent {
  role: String = 'manageClient';
  dataSource?: MatTableDataSource<Manager>;
  columns: String[] = [
    '#',
    'name',
    'mobile',
    'address',
    'nbTickets',
    'active',
  ];
  constructor() {}
}
