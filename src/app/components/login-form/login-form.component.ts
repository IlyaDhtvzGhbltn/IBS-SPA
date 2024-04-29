import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { AlertComponent } from '../alert/alert.component';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @ViewChild(AlertComponent) alert!: AlertComponent;

  constructor(
    private authService: AuthService,
    private router: Router) {
    if (authService.canActivate()) {
      this.router.navigate(['/data']);
    }
  }

  onSubmit(username: string, password: string): void {
    // Client side validation of user creds
    if (username && password) {

      // Use Auth service to try to login
      this.authService.login(username, password)
        .subscribe(
          (response) => {
            if (response.success === false) {

              //Handling invalid responce
              this.alert.show();
            }
            else {
              this.authService.setAuthorization(response.access_token);
              this.router.navigate(['/data']);
            }
          },
          (error) => {
            this.alert.show();
          }
        );
    }
  }

  // Prevent form submiting
  // Use onSubmit instead
  onFormSubmit(event: Event): void {
    event.preventDefault();
  }
}
