import {Component, OnInit} from "@angular/core";
import {ToDoService} from "../todos.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-index-page',
  templateUrl: './index.page.html'
})
export class ToDoIndexComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor(private todoService: ToDoService) {
  }

  ngOnInit() {
    this.fetchTodos();
  }

  deleteToDo(id: number|undefined) {
    const confirmDelete = confirm('Are you sure you want to delete this todo?');

    if (confirmDelete) {
      this.todoService.destroy(id)
        .subscribe((response) => {
          this.fetchTodos();
        });
    }
  }

  fetchTodos() {
    this.todoService.all()
      .subscribe((todos: any) => {
        this.todos = todos;
      });
  }
}
