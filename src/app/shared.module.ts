import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Routes } from "@angular/router";
import { UserComponent } from "./shared/component/user/user.component";

const routes : Routes = [
  {
    path:'users',
    component: UserComponent
  }
]

@NgModule({
  imports:[ReactiveFormsModule],
  exports:[ReactiveFormsModule],
})
export default class SharedModule { };
