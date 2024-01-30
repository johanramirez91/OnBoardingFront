import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiRickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/';
  private http = inject(HttpClient);

  obtenetPersonajes(): Observable<any> {
    return this.http.get(this.baseUrl + 'character');
  }
}
