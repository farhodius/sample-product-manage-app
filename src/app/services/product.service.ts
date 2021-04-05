import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private baseApiUrl: string = environment.baseApiUri;

  constructor(private http: HttpClient) {}

  loadProducts() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const params = new HttpParams({
      fromObject: { page: "1", perPage: "100" },
    });
    const uri = `${this.baseApiUrl}/api/product`;
    return this.http.get(uri, { headers: headers, params: params });
  }

  searchProducts(searchTerm) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const params = new HttpParams({
      fromObject: { page: "1", perPage: "100", name: searchTerm },
    });
    const uri = `${this.baseApiUrl}/api/product`;
    return this.http.get(uri, { headers: headers, params: params });
  }

  loadProduct(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const uri = `${this.baseApiUrl}/api/product/${id}`;
    return this.http.get(uri, { headers: headers });
  }

  updateProduct(product, id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const uri = `${this.baseApiUrl}/api/product/${id}`;
    return this.http.put(uri, product, { headers: headers });
  }

  createProduct(product) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const uri = `${this.baseApiUrl}/api/product`;
    return this.http.post(uri, product, { headers: headers });
  }

  deleteProduct(id: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
    });
    const uri = `${this.baseApiUrl}/api/product/${id}`;
    return this.http.delete(uri, { headers: headers });
  }
}
