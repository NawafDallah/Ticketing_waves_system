import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppLink } from 'src/app/linkApi';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtToken: any;
  private decodedToken: any;
  public isLoading: boolean = false;
  private isLoggedInValue = false;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  //Check if the user logged in or not
  isLoggedIn() {
    return this.isLoggedInValue;
  }

  // client regsiter
  register(client: any) {
    this.isLoading = true;
    this.http.post(`${AppLink.register}`, client).subscribe(
      (response) => {
        console.log('Registration has been successfully:', response);
        this.showSuccessMessage('Registration successful');
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error) => {
        console.error('Registration failed:', error);
        this.showErrorMessage('Registration failed. Please try again later.');
      }
    );
    this.isLoading = false;
  }

  // get token from server and store it in localStorage
  private getToken(response: any) {
    this.jwtToken = response.token;
    localStorage.setItem('authToken', this.jwtToken);
  }

  // decode the token we got from server and store it in localStorage
  private decodeToken() {
    this.decodedToken = jwt_decode<{
      email: String;
      id: String;
      userType: String;
      exp: number;
    }>(this.jwtToken);
    localStorage.setItem('userInfo', JSON.stringify(this.decodedToken));
    console.log('Registration successful:', this.decodedToken);
  }

  // Check the role of user and redirect to appropriate page
  private checkRoleOfUser() {
    if (
      this.decodedToken.userType === 'Client' ||
      this.decodedToken.userType === '0'
    ) {
      this.router.navigateByUrl('/clientHome');
    } else if (
      this.decodedToken.userType === 'Employee' ||
      this.decodedToken.userType === '1'
    ) {
      this.router.navigateByUrl('/employeeHome');
    } else if (
      this.decodedToken.userType === 'Manager' ||
      this.decodedToken.userType === '2'
    ) {
      this.router.navigateByUrl('/managerHome');
    }
  }

  //User login
  login(user: any) {
    this.isLoading = true;
    this.http.post(`${AppLink.login}`, user).subscribe(
      (response: any) => {
        // get token from server and store it in localStorage
        this.getToken(response);
        // decode the token we got from server and store it in localStorage
        this.decodeToken();
        // Check the role of user and redirect to appropriate page
        this.checkRoleOfUser();
        //this.showSuccessMessage('Login successful');
        this.isLoggedInValue = true;
      },
      (error) => {
        console.error('Login failed:', error);
        this.showErrorMessage(
          'email or password is wrong.'
        );
      }
    );
    this.isLoading = false;
  }

  //user logOut
  logout() {
    // Remove authentication token
    localStorage.removeItem('authToken');
    // Clear any other user-related data
    localStorage.removeItem('userInfo');
    this.isLoggedInValue = false;
    this.router.navigateByUrl('/login');
  }

  //snackBar success style and position
  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
    });
  }

  //snackBar error style and position
  showErrorMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 6000,
      verticalPosition: 'top' as MatSnackBarVerticalPosition,
      panelClass: ['error-snackbar'], // Custom CSS class for styling
    });
  }
}

// httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Access-control-allow-origin': '*',
//     'Access-control-allow-headers':
//       'Origin,X-Requested-with,content-Type,Accept',
//   }),
// };
