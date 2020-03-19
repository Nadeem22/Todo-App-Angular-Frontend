import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { TodoDataService } from "../service/data/todo-data.service";
import { Todo } from "../todo-list/todo-list.component";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;
  constructor(
    private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.todo = new Todo(this.id, "", false, new Date());
    if (this.id != -1) {
      this.todoDataService
        .executeGetTodoByIdService("nadeem", this.id)
        .subscribe(data => (this.todo = data));
    }
  }
  updateTodo() {
    if (this.id == -1) {
      console.log("---------------Add or update 1-------------");
      this.todoDataService.createTodo("nadeem", this.todo).subscribe(data => {
        this.router.navigate(["todos"]);
      });
    } else {
      console.log("---------------Add or update 2-------------");
      this.todoDataService
        .putTodoService("nadeem", this.id, this.todo)
        .subscribe(data => {
          this.router.navigate(["todos"]);
        });
    }
  }
}
