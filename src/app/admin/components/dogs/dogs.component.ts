import { DogsService } from '../../dogs.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  dogImageUrl: string = '';

  constructor(private dogsService: DogsService, private router: Router) {}


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

  userCreated: string = '';
  dateCreated: string = '';
  userUpdated: string = '';
  dateUpdated: string = '';

  navigateWithParams(): void {
    this.router.navigate(['/shared/users'], {
      queryParams: {
        userCreated: this.userCreated,
        dateCreated: this.dateCreated,
        userUpdated: this.userUpdated,
        dateUpdated: this.dateUpdated,
      },
    });
  }
}
