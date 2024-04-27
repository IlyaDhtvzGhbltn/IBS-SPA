  import { Component } from '@angular/core';
  import { AuthService } from '../../services/auth.service';

  @Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.css'
  })
  export class LoginFormComponent {
    constructor(private authService: AuthService) {
    }

    onSubmit(username: string, password: string): void {
      this.authService.login(username, password)
        .subscribe(
          (response) => {

          },
          (error) => {

          }
        );
    }
  }
