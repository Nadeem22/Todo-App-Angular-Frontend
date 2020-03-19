import { HardCodedAuthenticationService } from "./hard-coded-authentication.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class RouteGuardService implements CanActivate {
  constructor(
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private router: Router
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("called Rout Guard Service");
    if (this.hardCodedAuthenticationService.isUserLoggedIn()) return true;
    this.router.navigate(["login"]);
    return false;
  }
}
