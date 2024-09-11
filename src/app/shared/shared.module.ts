import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirectiveDirective } from './directives/white-space-directive.directive';



@NgModule({
  declarations: [
    WhiteSpaceDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
