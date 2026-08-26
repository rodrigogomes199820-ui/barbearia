import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

 
 getClientes(
  page: number,
  limit: number
): Observable<HttpResponse<any>> {

  const params = new HttpParams()
    .set('_page', page.toString())
    .set('_per_page', limit.toString());

  return this.http.get<any>(
    `${this.apiUrl}/clientes`,
    {
      params,
      observe: 'response'
    }
  );

}


  adicionarCliente(cliente: any): Observable<any> {

    return this.http.post<any>(
      `${this.apiUrl}/clientes`,
      cliente
    );

  }

  atualizarCliente(id: string | number, cliente: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/clientes/${id}`,
      cliente
    );
  }

  excluirCliente(id: string): Observable<any> {

  return this.http.delete<any>(
    `${this.apiUrl}/clientes/${id}`
  );

}




}