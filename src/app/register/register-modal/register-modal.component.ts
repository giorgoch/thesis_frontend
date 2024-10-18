import { Component } from '@angular/core';
import {   Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
 
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.css'
})
export class RegisterModalComponent {
  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, success: boolean },private router: Router
  ) {
     
  }

  ngOnInit() {
   
    const redirectTimeout = setTimeout(() => {
      this.router.navigate(['/']);
      this.dialogRef.close();
    }, 3000);
  
    
    this.dialogRef.afterClosed().subscribe(() => {
      clearTimeout(redirectTimeout); 
    });
  }

  onClose(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}
