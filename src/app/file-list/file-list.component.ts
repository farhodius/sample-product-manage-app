import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
  selector: "app-file-list",
  templateUrl: "./file-list.component.html",
  styleUrls: ["./file-list.component.css"],
})
export class FileListComponent implements OnInit {
  public files: any[] = [];
  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    this.fileService.loadFiles().subscribe((files: any[]) => {
      this.files = files;
    });
  }

  getFilesCount() {
    return this.files.length;
  }

  downloadFile(fileName: string) {
    this.fileService.downloadFile(fileName).subscribe((data:any) => {
      const blob = new Blob([data], { type: "octet/stream" });
      const a = document.createElement("a");
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
}
