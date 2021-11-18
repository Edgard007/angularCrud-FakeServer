import { Component, OnInit } from '@angular/core';

// ==> Interface
import { ICliente } from '../../interfaces/cliente';

// ==> Services
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  public clientesData: ICliente[] = [];

  constructor(private services: ClientesService) {}

  ngOnInit(): void {
    this.getClientes();
  }

  /**
   * @description Obtiene todos los clientes
   */
  getClientes() {
    this.services.getClientes().subscribe((data: ICliente[]) => {
      this.clientesData = data;
    });
  }
}
