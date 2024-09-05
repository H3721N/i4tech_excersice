import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, RouterOutlet} from '@angular/router';



import { FormInputComponent } from './form-input/form-input.component';
import { InputParamsComponent } from './params/params.component';
import { EndComponentComponent } from './end-component/end-component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormInputComponent,
    InputParamsComponent,
    EndComponentComponent,
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ciclo-de-vida';

  

  constructor(private router: Router) {}

  navigateToEnd() {
    this.router.navigate(['/end']);
  }
}
