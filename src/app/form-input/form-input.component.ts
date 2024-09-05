import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  inputValue: string = '';

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }
}
