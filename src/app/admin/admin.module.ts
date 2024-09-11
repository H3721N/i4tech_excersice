import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { FormsModule } from '@angular/forms';
import { DogsService } from './dogs.service'; 


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
  ],
  providers: [DogsService],
})
export class AdminModule { }
