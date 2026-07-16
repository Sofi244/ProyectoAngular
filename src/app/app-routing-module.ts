import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurnList } from './turn-list/turn-list';
import { TurnForm } from './turn-form/turn-form';

const routes: Routes = [
  { path: 'listado', component: TurnList }, 
  { path: 'nuevo', component: TurnForm },   
  { path: '', redirectTo: '/listado', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }