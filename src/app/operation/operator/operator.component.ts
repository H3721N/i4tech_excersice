import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent {
  userCreated: string = '';
  dateCreated: string = '';
  userUpdated: string = '';
  dateUpdated: string = '';

  constructor(private router: Router) {}

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
