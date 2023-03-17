import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ToDoComponent} from "./todos.component";
import {HttpClientModule} from "@angular/common/http";
import {ToDoService} from "./todos.service";
import {ToDoFormComponent} from "./_form/form.component";
import {ToDoIndexComponent} from "./pages/index.page";
import {ToDoRoutingModule} from "./todos-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

@NgModule({
  declarations: [
    ToDoComponent,
    ToDoFormComponent,
    ToDoIndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ToDoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [ToDoService]
})
export class ToDoModule {}
