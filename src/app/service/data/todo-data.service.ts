import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "src/app/todo-list/todo-list.component";
import { API_URL, JPA_API_URL } from "src/app/app.constants";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  constructor(private http: HttpClient) {}
  executeGetTodoList(username) {
    return this.http.get<Todo[]>(`${JPA_API_URL}/users/${username}/todos`);
  }
  executeDeleteTodoById(username, id) {
    return this.http.delete(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }
  executeGetTodoByIdService(username, id) {
    return this.http.get<Todo>(`${JPA_API_URL}/users/${username}/todos/${id}`);
  }
  putTodoService(username, id, todo) {
    return this.http.put(`${JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }
  createTodo(username, todo) {
    return this.http.post(`${JPA_API_URL}/users/${username}/todos`, todo);
  }
}
