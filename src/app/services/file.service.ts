import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FileService {
  private baseApiUrl: string = environment.baseApiUri;
  private headers: HttpHeaders = null;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
  }

  loadFiles() {
    const params = new HttpParams({
      fromObject: { page: "1", perPage: "100" },
    });
    const uri = `${this.baseApiUrl}/files/list`;
    return this.http.get(uri, { headers: this.headers, params: params });
  }

  downloadFile(fileName: string) {
    const params = new HttpParams({
      fromObject: { filename: fileName },
    });
    const uri = `${this.baseApiUrl}/files/download`;
    return this.http.get(uri, {
      headers: this.headers,
      params: params,
      responseType: "blob",
    });
  }

  uploadFile(data: FormData) {
    const uri = `${this.baseApiUrl}/files/upload`;
    return this.http.post(uri, data, { headers: this.headers });
  }
}
