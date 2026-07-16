import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurnoService } from '../services/turno';
import { Router } from '@angular/router'; // Importamos el Router para navegar

@Component({
  selector: 'app-turn-form',
  standalone: false,
  templateUrl: './turn-form.html',
  styleUrl: './turn-form.scss'
})
export class TurnForm implements OnInit {
  turnoForm: FormGroup;
  turnoAEditar: any = null; // Variable para guardar el turno que viene para editar

  constructor(
    private fb: FormBuilder, 
    private turnoService: TurnoService,
    private router: Router
  ) {
    this.turnoForm = this.fb.group({
      paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      estado: ['Disponible'],
      tratamiento: ['']
    });
  }

  ngOnInit() {
    // Si guardaste el turno en el servicio antes de navegar, lo recuperamos acá
    this.turnoAEditar = this.turnoService.turnoParaEditar;
    if (this.turnoAEditar) {
      this.turnoForm.patchValue(this.turnoAEditar); // Llena el formulario con los datos
    }
  }

  guardarTurno() {
    if (this.turnoForm.valid) {
      if (this.turnoAEditar) {
        // MODO UPDATE
        this.turnoService.updateTurno(this.turnoAEditar.id, this.turnoForm.value).subscribe(() => {
          alert('Turno actualizado con éxito');
          this.turnoService.turnoParaEditar = null; // Limpiamos la variable
          this.router.navigate(['/listado']); // Volvemos al listado
        });
      } else {
        // MODO CREATE
        this.turnoService.addTurno(this.turnoForm.value).subscribe(() => {
          alert('Turno guardado con éxito');
          this.turnoForm.reset();
          this.router.navigate(['/listado']);
        });
      }
    }
  }
}