import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApiUrl: string;

  constructor(private http: HttpClient) {
    // Getting auth api url from environment
    this.authApiUrl = environment.authApiUrl;
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.authApiUrl}/login`;
    var responce = this.http.post(url, { username, password });
    return responce;
  }
}
