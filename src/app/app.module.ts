import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RangoFechasComponent } from './rango-fechas/rango-fechas.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MinActualDateComponent } from './min-actual-date/min-actual-date.component';
import { MountYearComponent } from './mount-year/mount-year.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormatDateComponent } from './format-date/format-date.component';
import { DialogButtomComponent } from './dialog-buttom/dialog-buttom.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableRegisterComponent } from './table-register/table-register.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    RangoFechasComponent,
    MinActualDateComponent,
    MountYearComponent,
    FormatDateComponent,
    DialogButtomComponent,
    TableRegisterComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,  
    MatFormFieldModule,       
    MatInputModule,           
    MatDatepickerModule,      
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
