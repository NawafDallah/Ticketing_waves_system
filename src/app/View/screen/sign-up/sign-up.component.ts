import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/controller/service/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registrationForm?: FormGroup;
  isLoading: boolean = this.authService.isLoading;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      UserName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Name: ['', [Validators.required, Validators.minLength(2)]],
      PhoneNumber: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  register(client: any) {
    //debugger;
    if (this.registrationForm?.valid) {
      this.isLoading = true;
      this.authService.register(client);
      this.isLoading = false;
    }
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }
}
