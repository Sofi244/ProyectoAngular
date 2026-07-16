import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../services/turno';

@Component({
  selector: 'app-turn-list',
  standalone: false,
  templateUrl: './turn-list.html',
  styleUrl: './turn-list.scss'
})
export class TurnList implements OnInit {
  turnos: any[] = []; // Acá guardaremos los datos que vengan de la API

  constructor(private turnoService: TurnoService) {}

  ngOnInit() {
    this.turnoService.getTurnos().subscribe((datos: any) => {
      this.turnos = datos; // Guardamos los datos de la API en el array
      console.log('Turnos obtenidos:', this.turnos);
    });
  }
}