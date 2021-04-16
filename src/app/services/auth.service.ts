import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseApiUrl: string = environment.baseApiUri;

  constructor(private http: HttpClient) {}

  authenticate(creds): Observable<any> {
    const uri = `${this.baseApiUrl}/authenticate`;
    return this.http.post(uri, creds).pipe(
      map((data: any) => {
        if (data.token) {
          localStorage.setItem("auth-token", data.token);
        }
        return "Success";
      }),
      catchError((data) => {
        return of("Error");
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem("auth-token");
    return !!token;
  }

  get currentUser() {
    const token = localStorage.getItem("auth-token");
    if (token) {
      const helper = new JwtHelperService();
      return helper.decodeToken(token);
    }
    return null;
  }

  get isAdmin() {
    const user = this.currentUser;
    if (user === null) {
      return false;
    }
    return user.roles.includes("admin");
  }

  get isUser() {
    const user = this.currentUser;
    if (user === null) {
      return false;
    }
    return user.roles.includes("user");
  }

  get isCSRep() {
    const user = this.currentUser;
    if (user === null) {
      return false;
    }
    return user.roles.includes("cs-rep");
  }
}
