import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ==> Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ==> NG-Zorro modules
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

// ==> Routing
import { ClienteRoutingModule } from './cliente-routing.module';

// ==> Components
import { ClientesComponent } from './clients/clientes.component';
import { AddClientsComponent } from './/add-clients/add-clients.component';

@NgModule({
  declarations: [ClientesComponent, AddClientsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class ClienteModule {}
