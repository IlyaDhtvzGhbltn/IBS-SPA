import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    // Getting auth-api url from environment
    this.authApiUrl = environment.authApiUrl;
  }

  // Checking access_token in local storage
  // if token doesn't exist redirect to login
  canActivate(): boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  // Login
  login(username: string, password: string): Observable<any> {
    const url = `${this.authApiUrl}/login`;
    var responce = this.http.post(url, { username, password });
    return responce;
  }

  // Save auth token in localStorage
  setAuthorization(token: string): void {
    localStorage.setItem('access_token', token);
  }
}
