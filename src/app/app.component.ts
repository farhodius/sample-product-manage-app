import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logOut() {
    localStorage.removeItem("auth-token");
    this.router.navigate(["/"]);
    return false;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get isAdmin() {
    return this.authService.isAdmin;
  }

  get isUser() {
    return this.authService.isUser;
  }

  get isCSRep() {
    return this.authService.isCSRep;
  }
}
