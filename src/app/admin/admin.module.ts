import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { FormsModule } from '@angular/forms';
import { DogsService } from './dogs.service'; 
import { RouterModule, Routes } from "@angular/router";


const routes : Routes = [
  {
    path:'dogs',
    component: DogsComponent
  }
]
@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ],
  exports: [
    DogsComponent,
    FormsModule
  ],
  providers: [DogsService],
})
export class AdminModule { }
