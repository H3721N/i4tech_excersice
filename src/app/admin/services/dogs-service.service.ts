import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


@Injectable({
  providedIn: 'root',
})
export class DogsServiceService {

  private apiUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getRandomDogImage(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
