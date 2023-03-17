import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ToDoIndexComponent} from "./pages/index.page";
import {ToDoFormComponent} from "./_form/form.component";

const routes: Routes = [
  {path: '', component: ToDoIndexComponent},
  {path: 'new', component: ToDoFormComponent},
  {path: ':id/edit', component: ToDoFormComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ToDoRoutingModule {}
