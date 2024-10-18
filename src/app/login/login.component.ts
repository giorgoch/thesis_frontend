import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}
  private loggedIn = false; 
  email: string = '';
  password: string = '';
 
  login() {
     
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/dashboard']);
      } else {
 
        console.error('Login failed');
      }
    });
    
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

  logout() {
    this.loggedIn = false;  
  }

 
  isLoggedIn(): boolean {
    return this.loggedIn;
  }


}
