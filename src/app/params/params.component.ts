import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-params',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class InputParamsComponent implements OnInit {
  @Input() initialParam: string = '';
  updateParam: string = '';

  ngOnInit(): void {
    this.updateParam = this.initialParam;

    setTimeout(() => {
      this.updateParam = 'Decía 30 segundos, pero no tengo tanta paciencia, así que 5 segundos creo que será suficiente.';
    }, 3000);
  }
}
