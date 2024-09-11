import { DogsService } from '../dogs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogImageUrl: string = '';

  constructor(private dogsService: DogsService) {}

  ngOnInit(): void {
    this.fetchDogImage();
  }

  fetchDogImage(): void {
    this.dogsService.getRandomDogImage().subscribe(
      response => {
        this.dogImageUrl = response.message;
      },
      error => {
        console.error('Error fetching dog image', error);
      }
    );
  }
}
