import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  public file: File = null;
  public showSuccessAlert = false;
  private showAlertTimeout: any = null;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  onFileSelectEven(event) {
    if (event.target.files[0]) {
      this.file = event.target.files[0];
    } 
  }

  fileSelected() {
    return this.file !== null;
  }

  uploadFile() {
    const formData = new FormData();
    formData.append("file", this.file);
    this.fileService.uploadFile(formData).subscribe((data: any) => {
      if(data.result === 'success') {
        clearTimeout(this.showAlertTimeout);
        this.showSuccessAlert = true;
        this.file = null;
        this.showAlertTimeout = setTimeout(() => {
          this.showSuccessAlert = false;
        }, 5000);
      }
    });
  }
}
