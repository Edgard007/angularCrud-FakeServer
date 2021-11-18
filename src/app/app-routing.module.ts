import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==> Pages components
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
