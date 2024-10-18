import { Injectable } from '@angular/core';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
@Injectable({
  providedIn: 'root'
})
export class AWSS3ServiceService {

  private readonly bucketName = 'your-s3-bucket-name';
  private readonly s3Client: S3Client;

  constructor() { 
    this.s3Client = new S3Client({
      region: 'eu-central-1',
      credentials: {
        accessKeyId: 'test',
        secretAccessKey: 'test'
      }
    });

  }


  async uploadFile(file: File): Promise<string> {
    const fileKey = `uploads/${file.name}`;

    const uploadParams = {
      Bucket: this.bucketName,
      Key: fileKey,
      Body: file
    };
    try {
      const command = new PutObjectCommand(uploadParams);
      const data = await this.s3Client.send(command);
      console.log('File uploaded successfully:', data);
      return fileKey;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
}
