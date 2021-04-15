import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FileService {
  private baseApiUrl: string = environment.baseApiUri;

  constructor(private http: HttpClient) {}

  loadFiles() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const params = new HttpParams({
      fromObject: { page: "1", perPage: "100" },
    });
    const uri = `${this.baseApiUrl}/files/list`;
    return this.http.get(uri, { headers: headers, params: params });
  }

  downloadFile(fileName: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const params = new HttpParams({
      fromObject: { filename: fileName },
    });
    const uri = `${this.baseApiUrl}/files/download`;
    return this.http.get(uri, {
      headers: headers,
      params: params,
      responseType: "blob",
    });
  }

  uploadFile(data: FormData) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });

    const uri = `${this.baseApiUrl}/files/upload`;
    return this.http.post(uri, data, { headers: headers });
  }
}
