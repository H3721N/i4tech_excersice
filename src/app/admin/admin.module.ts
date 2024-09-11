import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DogsComponent,
    FormsModule
  ]
})
export class AdminModule { }
