import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EndComponentComponent } from './end-component/end-component.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
    
    EndComponentComponent,
    RouterModule.forRoot([])
  ],
  declarations: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
