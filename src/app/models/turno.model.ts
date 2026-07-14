export interface Turno {
  id?: number;
  paciente: string;
  fecha: string;
  hora: string;
  estado: 'Disponible' | 'Ocupado';
  tratamiento: string;
}