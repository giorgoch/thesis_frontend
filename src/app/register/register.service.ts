import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/api/users/createuser';
  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:password'),
      'Content-Type': 'application/json'
    });
    return this.http.post<User>(this.apiUrl, user, { headers });
  }
}
