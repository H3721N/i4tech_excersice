import { TestBed } from '@angular/core/testing';

import { DogsServiceService } from './dogs-service.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('DogsServiceService', () => {
  let service: DogsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(DogsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
