import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HardCodedAuthenticationService {
  constructor() {}
  authenticate(username, password) {
    if (username === "nadeem" && password === "nadeem1") {
      sessionStorage.setItem("authincatedUser", username);
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authincatedUser");
    console.log("userloggein ==" + user);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem("authincatedUser");
  }
}
