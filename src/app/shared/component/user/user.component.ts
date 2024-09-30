import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  auditData: any = {};

  constructor(private route: ActivatedRoute,private location: Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.auditData = {
        UserCreated: params['userCreated'] || 'No definido',
        DateCreated: params['dateCreated'] || 'No definido',
        UserUpdated: params['userUpdated'] || 'No definido',
        DateUpdated: params['dateUpdated'] || 'No definido',
      };
    });
  }
  back(): void {
    this.location.back();
  }
}
