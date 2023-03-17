import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";

@Injectable()
export class ToDoService {
  private apiUrl: string = 'http://localhost:8000/api';
  constructor(private httpClient: HttpClient) {
  }

  all() {
    return this.httpClient.get(`${this.apiUrl}/todos`);
  }

  add(todo: Todo) {
    return this.httpClient.post(`${this.apiUrl}/todos`, todo);
  }

  show(id: number) {
    return this.httpClient.get(`${this.apiUrl}/todos/${id}`);
  }

  update(todo: Todo) {
    return this.httpClient.put(`${this.apiUrl}/todos/${todo.id}`, todo);
  }

  destroy(id: number|undefined) {
    return this.httpClient.delete(`${this.apiUrl}/todos/${id}`);
  }
}
