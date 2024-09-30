import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorComponent } from './operator/operator.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

const routes : Routes = [
  {
    path:'operation',
    component: OperatorComponent
  }
]

@NgModule({
  declarations: [
    OperatorComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class OperationModule { }
