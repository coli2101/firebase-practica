import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteMensajeFormComponent } from './componente-mensaje-form/componente-mensaje-form.component';
import { ComponenteMensajeListaComponent } from './componente-mensaje-lista/componente-mensaje-lista.component';
import { ComponenteMensajeComponent } from './componente-mensaje/componente-mensaje.component';

const routes: Routes = [
  {path: 'ingresar', component: ComponenteMensajeFormComponent},
  {path: 'listar', component: ComponenteMensajeListaComponent},
  {path: 'combinado', component: ComponenteMensajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
