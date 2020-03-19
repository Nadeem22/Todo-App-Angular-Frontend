import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_URL } from "../app.constants";
export const TOKEN = "token";
export const AUTHENTICATED_USER = "authincatedUser";
@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}
  // authenticate(username, password) {
  //   if (username === "nadeem" && password === "nadeem1") {
  //     sessionStorage.setItem("authincatedUser", username);

  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      "Basic " + window.btoa(username + ":" + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data;
        })
      );
  }
  executeJwtAuthenticationService(username, password) {
    console.log("-------------------------2-----------2---------------------");
    return this.http
      .post<any>(`${API_URL}/authenticate`, {
        username,
        password
      })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );
  }
  getAuthenticateUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  getAuthenticatedToken() {
    if (this.getAuthenticateUser()) return sessionStorage.getItem(TOKEN);
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    console.log("userloggein ==" + user);
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
