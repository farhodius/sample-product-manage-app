import { Component, OnInit } from "@angular/core";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  private invalidLogin = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submitLogin(formData): void {
    this.authService.authenticate(formData).subscribe((res) => {
      this.invalidLogin = res !== "Success";
    });
  }

  isInvalidLogin(){
      return this.invalidLogin;
  }
}
