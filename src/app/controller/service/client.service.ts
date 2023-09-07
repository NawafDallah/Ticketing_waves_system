import { Injectable } from '@angular/core';
import { Client } from 'src/app/model/client';
import { HttpClient } from '@angular/common/http';
import { AppLink } from 'src/app/linkApi';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  userInfo = JSON.parse(localStorage.getItem('userInfo')!);
  userId = this.userInfo.id;
  userType = this.userInfo.userType;
  client: Client;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    // Initialize Client with default or initial data
    this.client = new Client('', '', '', '', '', '', false, '');
  }

  setClient(client: Client) {
    this.client = client;
  }

  getClient() {
    return this.client;
  }

  // Create new Ticket
  createTicket(ticket: any) {
    this.http.post(`${AppLink.creatTickets}`, ticket).subscribe(
      (response) => {
        console.log('Creation successful:', response);
      },
      (error) => {
        console.error('Creation failed:', error);
        this.showErrorMessage('Creation failed. try again.');
      },
      () => {
         window.location.reload();
        this.showSuccessMessage('Creation successfully');
      }
    );
  }

  //Ticket Edit
  editTicket(ticket: any, comment: String) {
    this.http.put(`${AppLink.editTickets}${ticket.id}`, comment).subscribe(
      (response) => {
        console.log('Edit ticket successfully:', response);
      },
      (error) => {
        console.error('Editing failed:', error);
        this.showErrorMessage('Editing failed. try again');
      },
      () => {
        window.location.reload();
        this.showSuccessMessage('Edit ticket successfully');
      }
    );
  }

  //get all Client Tickets
  getTicket() {
    return this.http
      .get<any[]>(`${AppLink.getClientTickets}${this.userId}`)
      .subscribe(
        (response) => {
          console.log('Get Tickets:', response);
          // store the response to arrClient in Client model
          this.setClient({ ticket: response });
        },
        (error) => {
          console.error('getTicket failed:', error);
        }
      );
  }

  //get all client tickets by search
  getTicketBySearch(value: String) {
    return this.http
      .get<any[]>(
        `${AppLink.searchClientTickets}${this.userId}?search=${value}`
      )
      .subscribe(
        (response) => {
          console.log('get ticket by name success ', response);
          // store the response to arrTicket in Client model
          this.setClient({ ticket: response });
        },
        (error) => {
          console.error('get ticket by name feild: ', error);
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

  //dashboardManagers
  dashBoardClient() {
    return this.http.get(`${AppLink.dashBoardCleint}${this.userId}`);
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
