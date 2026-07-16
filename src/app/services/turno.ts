import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurnoService { 
private apiUrl = 'https://6a569422b17de7bebbde61da.mockapi.io/turnos/turnos';

turnoParaEditar: any = null;

  constructor(private http: HttpClient) {} // Esto es lo que permite conectar a la API

  getTurnos() {
    return this.http.get(this.apiUrl);
  }
  
  addTurno(turno: any) {
    return this.http.post(this.apiUrl, turno);
  }

  deleteTurno(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateTurno(id: string, turno: any) {
    return this.http.put(`${this.apiUrl}/${id}`, turno);
  }
}