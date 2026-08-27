import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarbeirosService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  getBarbeiros(
    page: number,
    limit: number
  ): Observable<HttpResponse<any>> {

    const params = new HttpParams()
      .set('_page', page.toString())
      .set('_per_page', limit.toString());

    return this.http.get<any>(
      `${this.apiUrl}/barbeiros`,
      {
        params,
        observe: 'response'
      }
    );

  }

}