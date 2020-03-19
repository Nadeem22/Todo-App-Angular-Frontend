import { BasicAuthenticationService } from "./../basic-authentication.service";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpIntersepterBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "nadeem";
    // let password = "nadeem";
    // let basicAuthHeaderString =
    //   "Basic " + window.btoa(username + ":" + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticateUser();
    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
