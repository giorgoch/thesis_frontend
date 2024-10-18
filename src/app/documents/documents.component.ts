import { Component } from '@angular/core';
import { DocumentService } from './documentservice';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {


  selectedFile: File | null = null;
   files: { filePath: string, fileName: string }[] = [];
  constructor(private documentService: DocumentService,private cd: ChangeDetectorRef) { }


  deleteFile(documentname : string): void {
    console.log('Filename is:', documentname);
    this.documentService.deleteDocument(documentname).subscribe({
      next: () => {
        console.log('Document deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting document', error);
      },
    });
  }

  editFile(documentid: string) {

  }

  ngOnInit(): void {
    this.listFile();
  }
  
  errorMessage: string = '';

  listFile():void{
    this.documentService.getFiles('1').subscribe({
      next: (data) => {
        console.log('File data from API:', data);
        this.files = data;  
      },
      error: (err) => this.errorMessage = err
    });
       
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('Selected file:', this.selectedFile);
    }
  }

  private userId = 1;

  uploadFile() {
    if (this.selectedFile) {
      this.documentService.uploadFile(this.selectedFile, this.userId).subscribe({
        next: (response) => {
          console.log('File uploaded successfully!', response);
        },
        error: (error) => {
          console.error('File upload failed!', error);
        }
      });
    } else {
      console.error('No file selected for upload.');
    }
  }

}
