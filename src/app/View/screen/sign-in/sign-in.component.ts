import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/controller/service/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent { 
  loginForm?: FormGroup;
  isLoading: boolean = this.authService.isLoading;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(user: any) {
    //debugger;
    if (this.loginForm?.valid) {
      this.isLoading = true;
      this.authService.login(user);
      this.isLoading = false;
    }
  }

  goToRigestrePage() {
    this.router.navigate(['/register']);
  }
}
