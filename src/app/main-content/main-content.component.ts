import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
// import { AWSS3ServiceService } from '../awss3-service.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {


  constructor(public authService: AuthService, private router: Router ) {}
 

documents: any;
 
deleteFile(document: any) {

}
editFile(document: any) {
 
}

errorMessage: string = '';

logout() {
  this.authService.logout();
  this.router.navigate(['/login']);   
}

  selectedFile: File | null = null;
  @Input() label: string = 'Select File';
  @Input() acceptedFileTypes: string = '.pdf,.doc,.docx';
  @Output() fileSelected: EventEmitter<File> = new EventEmitter<File>();
   

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }
 

  clearFileInput(): void {
    
    this.fileSelected.emit();
  }
}
