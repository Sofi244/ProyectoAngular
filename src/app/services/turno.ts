import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnoService { // Cambiamos el nombre acá
  private apiUrl = 'https://6a569422b17de7bebbde61da.mockapi.io/turnos';

  constructor(private http: HttpClient) {} // Esto es lo que permite conectar a la API

  getTurnos() {
    return this.http.get(this.apiUrl);
  }
}