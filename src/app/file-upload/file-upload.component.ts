import { Component, OnInit } from "@angular/core";
import { FileService } from "../services/file.service";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"],
})
export class FileUploadComponent implements OnInit {
  public file: File = null;
  public showSuccessAlert = false;
  private showAlertTimeout: any = null;
  public errorAlertMsg = "";
  private errorAlertTimeout: any = null;

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
      this.file = null;
      if (data.result === "success") {
        this.displaySuccessAlert();
      } else if (data.error) {
        this.displayErrorAlert(data.error);
      }
    }, (err) => {
      console.log(err);
      this.file = null;
      if (err.error.error) {
        this.displayErrorAlert(err.error.error);
      }
    });
  }

  displaySuccessAlert() {
    clearTimeout(this.showAlertTimeout);
    this.showSuccessAlert = true;
    this.showAlertTimeout = setTimeout(() => {
      this.showSuccessAlert = false;
    }, 5000);
  }

  displayErrorAlert(msg) {
    clearTimeout(this.errorAlertTimeout);
    this.errorAlertMsg = msg;
    this.errorAlertTimeout = setTimeout(() => {
      this.errorAlertMsg = "";
    }, 5000);
  }
}
