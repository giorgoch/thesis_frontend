import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  login(email: string, password: string): Observable<{ success: boolean }> {
    this.loggedIn = true;
    localStorage.setItem('loggedIn', 'true');

     
    return of({ success: true });  
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }
}