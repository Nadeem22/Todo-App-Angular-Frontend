import { TodoDataService } from "./../service/data/todo-data.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

export class Todo {
  constructor(
    private id: number,
    private description: string,
    private iscompleted: boolean,
    private targetDate: Date
  ) {}
}

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  message: string = "";
  // [
  //   new Todo(1, "learning Angular", false, new Date()),
  //   new Todo(2, "learning Java", false, new Date()),
  //   new Todo(3, "learning Python", false, new Date())
  // ];

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit() {
    this.refreshTodo();
  }
  refreshTodo() {
    this.todoService.executeGetTodoList("nadeem").subscribe(response => {
      console.log(response);
      this.todos = response;
    });
  }
  deleteTodo(id) {
    this.todoService.executeDeleteTodoById("nadeem", id).subscribe(response => {
      this.message = `Todo ${id} is deleted Sucessfully`;
      this.refreshTodo();
    });
  }
  updateTodo(id) {
    this.router.navigate(["todos", id]);
  }
  addTodo() {
    this.router.navigate(["todos", -1]);
  }
}
