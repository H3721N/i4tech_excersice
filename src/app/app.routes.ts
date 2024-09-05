import { Route, Routes } from '@angular/router';
import { FormInputComponent } from './form-input/form-input.component';
import { InputParamsComponent } from './params/params.component';
import { EndComponentComponent } from './end-component/end-component.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'end', component: EndComponentComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' }
];
