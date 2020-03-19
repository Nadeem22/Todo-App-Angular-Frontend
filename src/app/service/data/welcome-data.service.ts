import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorld {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: "root"
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}
  executeHelloWorldBeanService() {
    return this.http.get<HelloWorld>("http://localhost:8080/hello-world-bean");
    // console.log("Ready to Call Backend Service");
  }
  executeHelloWorlPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });
    return this.http.get<HelloWorld>(
      `http://localhost:8080/helo-world/path-variable/${name}`
      // { headers }
    );
  }
  // createBasicAuthenticationHttpHeader() {
  //   let username = "nadeem";
  //   let password = "nadeem";
  //   let basicAuthHeaderString =
  //     "Basic " + window.btoa(username + ":" + password);
  //   return basicAuthHeaderString;
  // }
}
