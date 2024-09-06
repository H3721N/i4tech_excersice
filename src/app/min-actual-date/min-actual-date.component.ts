import { Component } from '@angular/core';

@Component({
  selector: 'app-min-actual-date',
  templateUrl: './min-actual-date.component.html',
  styleUrls: ['./min-actual-date.component.css']
})
export class MinActualDateComponent {

  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date (2023, 0, 1);
    this.maxDate = new Date ();
  }

}
