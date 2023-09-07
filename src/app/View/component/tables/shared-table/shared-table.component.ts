import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeFormComponent } from '../../forms/employee-form/employee-form.component';
import { TicketFormComponent } from '../../forms/ticket-form/ticket-form.component';
import { ViewTickeFormComponent } from '../../forms/view-ticke-form/view-ticke-form.component';
import { AssignFormComponent } from '../../forms/assign-form/assign-form.component';
import { ManagerService } from 'src/app/controller/service/manager.service';
import { Manager } from 'src/app/model/manager';
import { Employee } from 'src/app/model/employee';
import { Client } from 'src/app/model/client';
import { Ticket } from 'src/app/model/ticket';
import { ClientService } from 'src/app/controller/service/client.service';
import { EmployeeService } from 'src/app/controller/service/employee.service';
import { CommentFormComponent } from '../../forms/comment-form/comment-form.component';
import { CommentClientComponent } from '../../forms/comment-client/comment-client.component';

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css'],
})
export class SharedTableComponent implements OnInit {
  isLoading: boolean = false;
  searchText: String = '';
  isChecked: boolean = true;
  @Input() role: String = '';
  @Input() dataSource?: MatTableDataSource<any>;
  @Input() columns: String[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private managerService: ManagerService,
    private clientService: ClientService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    if (this.role === 'manageClient') {
      this.getAllClients();
    } else if (this.role === 'manageEmployee') {
      this.getAllEmployees();
    } else if (this.role === 'manageTicket') {
      this.getManagerTickets();
    } else if (this.role === 'ticketClient') {
      this.getClientTickets();
    } else if (this.role === 'ticketEmployee') {
      this.getEmployeeTickets();
    }
    ////////////////////////////////////////////////////
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource<any>([]);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; // Initialize with an empty array
    }
  }

  ///////////  close ticket  //////////

  toggleTicketClosed(row: any) {
    this.isLoading = true;
    if (row.status !== 2) {
      this.onCloseTicket(row);
    }
    this.isLoading = false;
  }

  onCloseTicket(ticket: any) {
    this.employeeService.closeTicket(ticket);
  }
  ///////////  active and deActive user  //////////

  toggleUserActivation(row: any) {
    this.isLoading = true;
    if (row.lockoutEnabled) {
      this.deActiveUser(row);
    } else {
      this.activeUser(row);
    }
    this.isLoading = false;
  }

  activeUser(user: any) {
    this.managerService.activeUser(user);
  }

  deActiveUser(user: any) {
    this.managerService.deActiveUser(user);
  }

  ///////////  search users by name  //////////

  searchEmployeeByName() {
    this.isLoading = true;
    this.managerService.getEmployeeBySearch(this.searchText).add(() => {
      this.dataSource = new MatTableDataSource<Manager>(
        this.managerService.getManager().arrEmployee
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  searchClientByName() {
    this.isLoading = true;
    this.managerService.getClientBySearch(this.searchText).add(() => {
      this.dataSource = new MatTableDataSource<Manager>(
        this.managerService.getManager().arrClient
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  searchTicket() {
    this.isLoading = true;
    this.managerService.getTicketBySearch(this.searchText).add(() => {
      this.dataSource = new MatTableDataSource<Manager>(
        this.managerService.getManager().arrTicket
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  searchTicketClientByName() {
    this.isLoading = true;
    this.clientService.getTicketBySearch(this.searchText).add(() => {
      this.dataSource = new MatTableDataSource<Client>(
        this.clientService.getClient().ticket
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  searchTicketEmployeeByName() {
    this.isLoading = true;
    this.employeeService.getTicketBySearch(this.searchText).add(() => {
      this.dataSource = new MatTableDataSource<Employee>(
        this.employeeService.getEmployee().ticket
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  ///////////  get users from server   //////////

  getAllClients() {
    this.isLoading = true;
    this.managerService.getClient().add(() => {
      this.dataSource = new MatTableDataSource<Manager>(
        this.managerService.getManager().arrClient
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  getAllEmployees() {
    this.isLoading = true;
    this.managerService.getEmployee().add(() => {
      this.dataSource = new MatTableDataSource<Manager>(
        this.managerService.getManager().arrEmployee
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  ///////////  get Ticket from server   //////////

  getManagerTickets() {
    this.isLoading = true;
    this.managerService.getAllTicket().add(() => {
      this.dataSource = new MatTableDataSource<Manager>(
        this.managerService.getManager().arrTicket
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  getClientTickets() {
    this.isLoading = true;
    this.clientService.getTicket().add(() => {
      this.dataSource = new MatTableDataSource<Client>(
        this.clientService.getClient().ticket
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  getEmployeeTickets() {
    this.isLoading = true;
    this.employeeService.getTicket().add(() => {
      this.dataSource = new MatTableDataSource<Employee>(
        this.employeeService.getEmployee().ticket
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  ///////////  dialogs   /////////////

  onEditEmployee(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = row;
    this.dialog.open(EmployeeFormComponent, dialogConfig);
  }

  onEditTicket(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '60%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = row;
    this.dialog.open(TicketFormComponent, dialogConfig);
  }

  onViewTicket(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '60%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = row;
    this.dialog.open(ViewTickeFormComponent, dialogConfig);
  }

  onCommentTicket(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '35%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = row;
    this.dialog.open(CommentFormComponent, dialogConfig);
  }

  onClientCommentTicket(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '35%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = row;
    this.dialog.open(CommentClientComponent, dialogConfig);
  }

  onAssignTicket(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '30%';
    dialogConfig.autoFocus = false;
    dialogConfig.data = row;
    this.dialog.open(AssignFormComponent, dialogConfig);
  }
}
