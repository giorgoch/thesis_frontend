import { Component } from '@angular/core';
import { User } from '../User';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { MatDialog } from '@angular/material/dialog';  
import { Router } from '@angular/router';  
import { RegisterModalComponent } from './register-modal/register-modal.component';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  user: User = {
    email: '',
    password: '',
    user: '',
    name: '',
    lastname: '',
    phonenumber: '',
    year: '',
    dateOfBirth:  '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    active: true,
    role: '',
    profilePictureUrl: '',
    createdDate: '',
    updatedDate: '',
    lastLoginDate: '',
    preferences: '',

  };
  
  constructor(private registerService: RegisterService,private dialog: MatDialog,   
    private router: Router) { }

  successMessage: string = '';
  errorMessage: string = '';
  onSubmit(form: NgForm) {
 
    console.log('User registered:', this.user);
    if (form.valid) {
      this.registerService.register(this.user).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          this.openModal('User registered successfully!', true);

        },
        error: (error) => {
          console.error('Registration failed:', error);
          this.openModal('Registration failed. Please try again.', false);
        }
      });
    }
  }
  openModal(message: string, success: boolean) {
    this.dialog.open(RegisterModalComponent, {
      data: { message, success },
      width: '400px',  
    });
   
  }


}
