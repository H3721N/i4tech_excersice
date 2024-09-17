import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogarComponent} from "./hogar/hogar.component";

const routes: Routes = [
  {
    path: 'home',
    component: HogarComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.default)
  },
  {
    path:'commons',
    loadChildren: () => import('./common/common.module').then(m => m.default)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
