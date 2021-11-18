import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==> Componentes
import { ClientesComponent } from './clients/clientes.component';
import { AddClientsComponent } from './add-clients/add-clients.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
  },
  {
    path: 'agregar',
    component: AddClientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
