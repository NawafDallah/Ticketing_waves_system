import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppLink } from 'src/app/linkApi';
import { Manager } from 'src/app/model/manager';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  manager: Manager;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.manager = new Manager('', '', '', '', '', '', '');
  }

  setManager(manager: Manager) {
    this.manager = manager;
    // this.managerInitialized = true;
  }

  getManager() {
    return this.manager;
  }

  //Employee Register
  addEmployee(emp: any) {
    this.http.post(`${AppLink.addEmployee}`, emp).subscribe(
      (response) => {
        console.log('Employee Added successful:', response);
      },
      (error) => {
        console.error('Adding failed:', error);
        this.showErrorMessage('Adding failed. Please try again later.');
      },
      () => {
        window.location.reload();
        this.showSuccessMessage('Employee Added successfully');
      }
    );
  }

  //Employee Edit
  editEmployee(emp: any) {
    this.http.put(`${AppLink.editEmployee}employeeId=${emp.id}`, emp).subscribe(
      (response) => {
        console.log('Edit successful:', response);
      },
      (error) => {
        console.error('Editing failed:', error);
        this.showErrorMessage('Editing failed. try again');
      },
      () => {
        window.location.reload();
        this.showSuccessMessage('Edit has been successfully');
      }
    );
  }

  //get all employees from server
  getEmployee() {
    return this.http.get<any[]>(`${AppLink.getEmployees}`).subscribe(
      (response) => {
        this.setManager({ arrEmployee: response });
      },
      (error) => {
        console.error('getEmployee failed:', error);
      }
    );
  }

  //get employee to display it in mat-select
  getEmployeeToAssignTicket() {
    return this.http.get<any[]>(`${AppLink.getEmployees}`);
  }

  //get all Employee from server by search by name
  getEmployeeBySearch(value: String) {
    return this.http
      .get<any[]>(`${AppLink.searchEmployee}search=${value}`)
      .subscribe(
        (response) => {
          console.log('get employee by name success ', response);
          // store the response to arrClient in Manager model
          this.setManager({ arrEmployee: response });
        },
        (error) => {
          console.error('get employee by name feild: ', error);
        }
      );
  }

  //get all Cleint from server
  getClient() {
    return this.http.get<any[]>(`${AppLink.getClients}`).subscribe(
      (response) => {
        console.log('Get Client:', response);
        // store the response to arrClient in Manager model
        this.setManager({ arrClient: response });
      },
      (error) => {
        console.error('Get Client failed:', error);
      }
    );
  }

  //get all Client from server by search by name
  getClientBySearch(value: String) {
    return this.http
      .get<any[]>(`${AppLink.searchClient}search=${value}`)
      .subscribe(
        (response) => {
          console.log('get client by name success ', response);
          // store the response to arrClient in Manager model
          this.setManager({ arrClient: response });
        },
        (error) => {
          console.error('get Client by name feild: ', error);
        }
      );
  }

  //get all Tickets from server
  getAllTicket() {
    return this.http.get<any[]>(`${AppLink.getManagerTickets}`).subscribe(
      (response) => {
        console.log('Get Tickets:', response);
        //store the response to arrTicket in Manager model
        this.setManager({ arrTicket: response });
      },
      (error) => {
        console.error('getTicket failed:', error);
      }
    );
  }

  //get all Tickets from server by search
  getTicketBySearch(value: String) {
    return this.http
      .get<any[]>(`${AppLink.searchManagerTicket}search=${value}`)
      .subscribe(
        (response) => {
          console.log('get Ticket by name success ', response);
          // store the response to arrClient in Manager model
          this.setManager({ arrTicket: response });
        },
        (error) => {
          console.error('get Ticket by name feild: ', error);
        }
      );
  }

  //Assign ticket to the employee
  assignTicket(ticket: any, empId: String) {
    this.http
      .post(
        `${AppLink.assignTicket}ticketId=${ticket.id}&employeeId=${empId}`,
        ticket
      )
      .subscribe(
        (response) => {
          console.log('Assign success', response);
        },
        (error) => {
          console.log('Assign filed', error);
        },
        () => {
          window.location.reload();
          this.showSuccessMessage('Assigning successfully');
        }
      );
  }

  //make user active
  activeUser(user: any) {
    this.http.put(`${AppLink.activeUser}${user.id}`, user).subscribe(
      (response) => {
        console.log('active user success', response);
      },
      (error) => {
        console.log('active user filed', error);
      },
      () => {
        window.location.reload();
        this.showSuccessMessage('User activating successfully');
      }
    );
  }

  //make user deActive
  deActiveUser(user: any) {
    this.http.put(`${AppLink.deactiveUser}${user.id}`, user).subscribe(
      (response) => {
        console.log('deActive user success', response);
      },
      (error) => {
        console.log('deActive user filed', error);
      },
      () => {
        window.location.reload();
        this.showSuccessMessage('User deActivating successfully');
      }
    );
  }

  //dashboardManagers
  dashBoardManager() {
    return this.http.get(`${AppLink.dashBoardManager}`);
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
