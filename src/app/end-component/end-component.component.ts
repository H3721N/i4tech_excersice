import { Component, OnDestroy } from '@angular/core';
import {Router, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-end-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './end-component.component.html',
  styleUrls: ['./end-component.component.css']
})
export class EndComponentComponent implements OnDestroy {
  value: string = '';

  constructor(private router: Router) {}



  navigateToApp() {
    this.router.navigate(['/app']);
  }

  ngOnDestroy() {
    console.log('EndComponentComponent ha sido destruido.');
  }
}