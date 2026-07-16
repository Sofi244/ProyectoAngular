import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurnoService } from '../services/turno';

@Component({
  selector: 'app-turn-form',
  standalone: false,
  templateUrl: './turn-form.html',
  styleUrl: './turn-form.scss'
})
export class TurnForm {
  turnoForm: FormGroup;

  constructor(private fb: FormBuilder, private turnoService: TurnoService) {
    this.turnoForm = this.fb.group({
      paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      estado: ['Disponible'],
      tratamiento: ['']
    });
  }

  guardarTurno() {
    if (this.turnoForm.valid) {
      this.turnoService.addTurno(this.turnoForm.value).subscribe(() => {
        alert('Turno guardado con éxito');
        this.turnoForm.reset();
      });
    }
  }
}