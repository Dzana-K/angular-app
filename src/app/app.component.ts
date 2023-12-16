/*import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}*/
import { Component } from '@angular/core';
import { AuthService } from './core/api/api/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl:'./app.component.html'
})
export class AppComponent {
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
