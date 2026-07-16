import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../services/turno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turn-list',
  standalone: false,
  templateUrl: './turn-list.html',
  styleUrl: './turn-list.scss'
})
export class TurnList implements OnInit {
  turnos: any[] = [];
  idABorrar: string | null = null; // Variable para guardar el ID del turno a eliminar

  constructor(
    private turnoService: TurnoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.turnoService.getTurnos().subscribe((datos: any) => {
      this.turnos = datos;
    });
  }

  // 1. Abrimos el modal y guardamos el ID
  eliminarTurno(id: string) {
    this.idABorrar = id;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
  }

  // 2. Se ejecuta al hacer clic en "Sí, eliminar"
  confirmarEliminacion() {
    if (this.idABorrar) {
      this.turnoService.deleteTurno(this.idABorrar).subscribe(() => {
        // Filtramos para actualizar la vista
        this.turnos = this.turnos.filter(t => t.id !== this.idABorrar);
        
        // Cerramos el modal usando Bootstrap
        const modalEl = document.getElementById('deleteModal');
        const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
        modal.hide();
        
        this.idABorrar = null; // Limpiamos la variable
      });
    }
  }

  editarTurno(turno: any) {
    this.turnoService.turnoParaEditar = turno;
    this.router.navigate(['/nuevo']); 
  }

  crearNuevoTurno() {
    this.turnoService.turnoParaEditar = null;
    this.router.navigate(['/nuevo']);
  }
}