import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
        if(data.token) {
          localStorage.setItem('auth-token', data.token);
        }
        return 'Success';
      }),
      catchError((data) => {
        return of('Error');
      })
    );
  }

  isLoggedIn():boolean {
    const token = localStorage.getItem('auth-token');
    return !!token;
  }
}
