import { Component } from '@angular/core';

@Component({
  selector: 'app-turn-list',
  standalone: false,
  templateUrl: './turn-list.html',
  styleUrl: './turn-list.scss'
})
export class TurnList {
turn= {
  "Fecha": "12/10/2025",
  "Hora" :"12:00",
  "Estado" : "Ocupado",
}
}
