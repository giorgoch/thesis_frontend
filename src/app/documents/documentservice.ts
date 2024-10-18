import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {


  constructor(private http: HttpClient) {}


private userId = 1; 
private deleteurl = `http://localhost:8080/api/document/deletedocument`; 

private baseUrl = `http://localhost:8080/api/document/upload/${this.userId}`;
private listfiles = 'http://localhost:8080/api/document/';

private apiUrl = 'http://localhost:8080/api/document/list-files';

uploadUrl: string = "/upload/";

 

deleteDocument(documentName: string): Observable<void> {
  console.log( "file apo service : " , documentName)
  const encodedDocumentName = encodeURIComponent(documentName);
  return this.http.delete<void>(`${this.deleteurl}/${this.userId}/${encodedDocumentName}`).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error deleting document:', error);
      return throwError(error);
    })
  );
}


  uploadFile(file: File, userId: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(this.baseUrl, formData, {
      headers: new HttpHeaders({
       
      }),
      reportProgress: true,
      observe: 'events' 
    });
  }


getFiles(userId: string): Observable<{ filePath: string, fileName: string }[]> {
  return this.http.get<{ filePath: string, fileName: string }[]>(`${this.apiUrl}/${userId}`)
    .pipe(
      catchError(this.handleError)   
    );
}

  listFiles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.listfiles}/list-files/}`);
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Error: ${error.error.message}`;
    } else {
      
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
