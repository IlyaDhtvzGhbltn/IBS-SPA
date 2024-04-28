import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataApiUrl: string;

  constructor(private http: HttpClient) {
    // Getting data api url from environment
    this.dataApiUrl = environment.dataApiUrl;
  }

  getProducts(): Observable<any> {
    const url = `${this.dataApiUrl}/products`;
    var responce = this.http.get(url);
    return responce;
  }
}
