import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirectiveDirective } from './directives/white-space-directive.directive';
import { UserComponent } from './component/user/user.component';
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
  {
    path:'users',
    component: UserComponent
  }
]

@NgModule({
  declarations: [
    WhiteSpaceDirectiveDirective,
    UserComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class SharedModule { }
