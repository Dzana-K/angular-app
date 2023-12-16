import { Component } from '@angular/core';
import { AuthService } from '../../core/api/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html'
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    const userCredentials = { /* Your user credentials here */ };
    this.authService.login(userCredentials).subscribe(
      (response) => {
        const accessToken = response.access_token;
        this.authService.setAccessToken(accessToken);
        console.log('Login successful', response);
        // Handle success, save tokens, redirect, etc.
      },
      (error) => {
        console.error('Login failed', error);
        // Handle error, display message, etc.
      }
    );
  }
}