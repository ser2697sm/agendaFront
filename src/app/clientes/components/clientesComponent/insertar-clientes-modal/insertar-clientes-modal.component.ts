import { Component } from '@angular/core';
import { ApiService } from '../../../service/cliente.service';
import { FormControl, FormGroup, Validators,FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-insertar-clientes-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insertar-clientes-modal.component.html',
  styleUrl: './insertar-clientes-modal.component.css'
})
export class InsertarClientesModalComponent {
  form: FormGroup;
  tramites: any[] = [];

  constructor(private apiService: ApiService,private formBuilder: FormBuilder) {
    // Inicializamos el FormBuilder en el constructor
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      pais: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      valorTramites: ['', Validators.required],
      cantidaPagos: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.verTramitesSinRepetir();
  }

  onSubmmit() {
    console.log("Formulario enviado");
    console.log(this.form.value);

    if (this.form.valid) {
      console.log(this.form.value);
      this.apiService.crearCliente(this.form.value).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log("Formulario no valido");
    }
  }

  verTramitesSinRepetir() {
    this.apiService.getTramitesSinRepetir().subscribe((tramites: any) => {
      this.tramites = tramites;
      console.log(tramites);
    });
    
  }

}
