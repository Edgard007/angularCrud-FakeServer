import { Component, OnInit } from '@angular/core';

// Forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// ==> Interface
import { ICliente } from '../../../interfaces/cliente';

// ==> Services
import { ClientesService } from '../../../services/clientes/clientes.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css'],
})
export class AddClientsComponent implements OnInit {
  public clientesForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: ClientesService) {}

  ngOnInit(): void {
    // ==> Inicializando Form
    this.inicializeForm();
  }

  inicializeForm() {
    this.clientesForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      nit: ['', Validators.required, Validators.pattern('')],
    });
  }
}
