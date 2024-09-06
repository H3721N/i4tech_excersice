import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  toggleDPI: boolean = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      birthDate: ['', [Validators.required, this.dateLessThanToday]],
    });

    this.secondFormGroup = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    });

    this.thirdFormGroup = this._formBuilder.group({
      dpi: ['']
    });
  }

  dateLessThanToday(control: any) {
    const inputDate = control.value;
    const today = moment();
    return inputDate && moment(inputDate).isSameOrAfter(today) ? { dateInvalid: true } : null;
  }

  toggleDPIChanged(event: any) {
    this.toggleDPI = event.checked;
  }

  isStep1Valid() {
    return this.firstFormGroup.valid;
  }

  isStep2Valid() {
    return this.secondFormGroup.valid;
  }

  isStep3Valid() {
    const dpiControl = this.thirdFormGroup.get('dpi')!;
  }
  
}
