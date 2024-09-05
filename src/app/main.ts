import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { EndComponentComponent } from './end-component/end-component.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
