import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, senha: string): Observable<any[]> {
    const params = new HttpParams().set('email', email);

    return this.http.get<any[]>(this.apiUrl, { params }).pipe(
      map(usuarios => usuarios.filter(usuario => usuario.senha === senha))
    );
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

}