import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DogsService } from './dogs.service';

describe('DogsService', () => {
  let service: DogsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogsService] 
    });

    service = TestBed.inject(DogsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch random dog image', () => {
    const dummyResponse = { message: 'https://dog.ceo/api/breeds/image/random' };

    service.getRandomDogImage().subscribe(response => {
      expect(response.message).toBe(dummyResponse.message);
    });

    const req = httpMock.expectOne('https://dog.ceo/api/breeds/image/random');
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
