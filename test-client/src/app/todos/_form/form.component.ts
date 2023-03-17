import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ToDoService} from "../todos.service";
import {Todo} from "../todo";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './form.template.html',
  styleUrls: ['./form.style.scss']
})
export class ToDoFormComponent implements OnInit {
  todo: Todo = new Todo();
  todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private todoService: ToDoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params.hasOwnProperty('id')) {
        const id = params['id'];

        this.todoService.show(id)
          .subscribe((response) => {
            this.todo = response;
            this.todoForm.patchValue(response);
          });
      }
    });
  }

  saveTodo() {
    const todo: Todo = this.todoForm.value;

    if (!this.todo.id) {
      this.todoService.add(todo)
        .subscribe((response) => {
          this.router.navigate(['/todos']);
        });
    } else {
      todo.id = this.todo.id;

      this.todoService.update(todo)
        .subscribe((response) => {
          this.router.navigate(['/todos']);
        });
    }
  }
}
