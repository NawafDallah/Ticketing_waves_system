import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { AppLink } from 'src/app/linkApi';
import { Employee } from 'src/app/model/employee';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  userInfo = JSON.parse(localStorage.getItem('userInfo')!);
  userId = this.userInfo.id;
  userType = this.userInfo.userType;
  employee?: Employee;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    // Initialize Employee with default or initial data
    this.employee = new Employee('', '', '', '', '', '', false, '');
  }

  setEmployee(employee: Employee) {
    this.employee = employee;
  }

  getEmployee() {
    return this.employee;
  }

  //get all Employee Tickets
  getTicket() {
    return this.http
      .get<any[]>(`${AppLink.getEmployeeTickets}${this.userId}`)
      .subscribe(
        (response) => {
          console.log('Get Tickets:', response);
          // store the response to arrEmployee in Employee model
          this.setEmployee({ ticket: response });
        },
        (error) => {
          console.error('getTicket failed:', error);
        }
      );
  }

  //get all Employee tickets by search
  getTicketBySearch(value: String) {
    return this.http
      .get<any[]>(
        `${AppLink.searchEmployeeTickets}${this.userId}?search=${value}`
      )
      .subscribe(
        (response) => {
          console.log('get ticket by name success ', response);
          // store the response to arrTicket in Employee model
          this.setEmployee({ ticket: response });
        },
        (error) => {
          console.error('get ticket by name feild: ', error);
        }
      );
  }

  closeTicket(ticket: any) {
    this.http
      .post(`${AppLink.closeTickets}ticketId=${ticket.id}`, ticket)
      .subscribe(
        (Response) => {
          console.log('ticket close seccusssfully');
        },
        (error) => {
          console.log('ticket close field');
        },
        () => {
          window.location.reload();
          this.showSuccessMessage('ticket close seccusssfully');
        }
      );
  }

  //adding comment on ticket
  addCommentToTicket(ticket: any, comment: any) {
    this.http.put(`${AppLink.TicketComments}${ticket.id}`, comment).subscribe(
      (response) => {
        console.log('comment added seccussfully', response);
        this.showSuccessMessage('comment added seccussfully');
      },
      (error) => {
        console.log('comment added feild', error);
      }
    );
  }

  //get all comments of tickets from server
  getCommentOfTickets(ticket: any) {
    return this.http.get(`${AppLink.getComments}ticketId=${ticket.id}`);
  }

  //dashboardEmployee
  dashBoardEmployee() {
    return this.http.get(`${AppLink.dashBoardEmployee}${this.userId}`);
  }

  //snackBar success style and position
  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
    });
  }

  //snackBar error style and position
  showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      horizontalPosition: 'right' as MatSnackBarHorizontalPosition,
      panelClass: ['error-snackbar'], // Custom CSS class for styling
    });
  }
}
