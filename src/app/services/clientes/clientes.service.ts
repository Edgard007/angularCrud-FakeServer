import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ==> Interface
import { ICliente } from '../../interfaces/cliente';

// ==> Enviroment
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private _baseUrl = environment.BASE_URL;

  constructor(private httpClient: HttpClient) {}

  getClientes() {
    return this.httpClient.get<ICliente[]>(`${this._baseUrl}/clientes`);
  } // End: getClientes | GET | /clientes | ICliente[]
}
