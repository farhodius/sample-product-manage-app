import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class FileGuardService implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(route, state) {
    const user = this.authService.currentUser;
    if(user === null) {
      return false;
    }
    // Admin and customer success rep can access anything
    if (user.roles.includes("admin") || user.roles.includes("cs-rep")) {
      return true;
    }
    if (state.url === '/file/upload' && user.roles.includes('user')) {
      return  true;
    }
    
    this.router.navigate(["/"]);
    return false;
  }
}
