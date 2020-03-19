import { BasicAuthenticationService } from "./../service/basic-authentication.service";
import { HardCodedAuthenticationService } from "./../service/hard-coded-authentication.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "nadeem";
  password: string = "nadeem";
  errorMessage: string = "Invalid Credential";
  invalidCredential: boolean = false;

  constructor(
    private router: Router,
    private hardCodedAuthentication: HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}
  login() {
    if (
      this.hardCodedAuthentication.authenticate(this.username, this.password)
    ) {
      this.router.navigate(["welcome", this.username]);
      this.invalidCredential = false;
    } else {
      this.invalidCredential = true;
    }
    console.log(this.username);
    console.log(this.password);
  }
  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidCredential = false;
        },
        error => {
          console.log(error);
          this.invalidCredential = true;
        }
      );
  }
  handleJwtBasicAuthLogin() {
    console.log("-------------1111111111111111111--------------------");
    this.basicAuthenticationService
      .executeJwtAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["welcome", this.username]);
          this.invalidCredential = false;
        },
        error => {
          console.log(error);
          this.invalidCredential = true;
        }
      );
  }
}
