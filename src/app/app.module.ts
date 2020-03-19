import { RouteGuardService } from "./service/route-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { LogoutComponent } from "./logout/logout.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TodoComponent } from "./todo/todo.component";
import { HttpIntersepterBasicAuthService } from "./service/http/http-intersepter-basic-auth.service";
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "todos",
    component: TodoListComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "welcome/:username",
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "todos/:id",
    component: TodoComponent,
    canActivate: [RouteGuardService]
  },
  { path: "**", component: ErrorComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    TodoListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIntersepterBasicAuthService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
