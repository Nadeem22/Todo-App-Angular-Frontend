import { WelcomeDataService } from "./../service/data/welcome-data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  name: string = "";
  welcomeMessage: string = "";
  errorMessage: string = "";
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params["username"];
  }
  getWelcomeMessageByPathVariable() {
    console.log(this.service.executeHelloWorlPathVariable(this.name));
    this.service.executeHelloWorlPathVariable(this.name).subscribe(
      response => this.handleSucessfullResponse(response),
      error => this.handleError(error)
    );
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSucessfullResponse(response),
      error => this.handleError(error)
    );
  }
  handleSucessfullResponse(response) {
    this.welcomeMessage = response.message;
  }
  handleError(error) {
    this.errorMessage = error.error.message;
  }
}
