import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurnoService } from '../services/turno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turn-form',
  standalone: false,
  templateUrl: './turn-form.html',
  styleUrl: './turn-form.scss'
})
export class TurnForm implements OnInit {
  turnoForm: FormGroup;
  turnoAEditar: any = null;

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
    this.turnoAEditar = this.turnoService.turnoParaEditar;
    if (this.turnoAEditar) {
      this.turnoForm.patchValue(this.turnoAEditar);
    } else {
      this.turnoForm.reset({ estado: 'Disponible' });
    }
  }

  // Nueva función auxiliar para el Toast
  private mostrarToast(mensaje: string) {
    const toastEl = document.getElementById('liveToast');
    const toastBody = document.getElementById('toastMessage');
    if (toastEl && toastBody) {
      toastBody.innerText = mensaje;
      const toast = new (window as any).bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  guardarTurno() {
    if (this.turnoForm.valid) {
      if (this.turnoAEditar) {
        // MODO UPDATE
        this.turnoService.updateTurno(this.turnoAEditar.id, this.turnoForm.value).subscribe(() => {
          this.mostrarToast('Turno actualizado con éxito');
          this.turnoService.turnoParaEditar = null;
          setTimeout(() => this.router.navigate(['/listado']), 500);
        });
      } else {
        // MODO CREATE
        this.turnoService.addTurno(this.turnoForm.value).subscribe(() => {
          this.mostrarToast('Turno guardado con éxito');
          this.turnoForm.reset({ estado: 'Disponible' });
          setTimeout(() => this.router.navigate(['/listado']), 500);
        });
      }
    }
  }
}