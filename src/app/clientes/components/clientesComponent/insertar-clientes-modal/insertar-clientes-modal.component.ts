import { Component, inject } from '@angular/core';
import { ApiService } from '../../../service/cliente.service';
import { FormControl, FormGroup, Validators,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from './insertar-clientes-validators';

@Component({
  selector: 'app-insertar-clientes-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './insertar-clientes-modal.component.html',
  styleUrl: './insertar-clientes-modal.component.css'
})
export class InsertarClientesModalComponent {
  private readonly _formBuilder = inject(FormBuilder);
  //form: FormGroup;
  tramites: any[] = [];
  validationCampo: String[] = [];

  constructor(private apiService: ApiService) {}

   // Inicializamos el FormBuilder en el constructor
   formGroup = this._formBuilder.nonNullable.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    pais: ['', Validators.required],
    dni: ['', Validators.required],
    telefono: ['', [Validators.required,CustomValidators.validationNumerodeTelefono]],
    valorTramites: ['', Validators.required],
    cantidaPagos: ['', Validators.required],
    comentario: ['', Validators.required]
  });

  ngOnInit() {
    this.verTramitesSinRepetir();
  }

  onSubmmit() {
    console.log("Formulario enviado");
    console.log(this.formGroup.valid);
    console.log(this.formGroup.value);

    console.log(this.formGroup.controls.nombre.errors);
    
    
    

    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
   
      this.apiService.crearCliente(this.formGroup.value).subscribe((response) => {
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

  get nombreField() {  
    return this.formGroup.controls.nombre; 
  }

  get apellidosField() {  
    return this.formGroup.controls.apellidos; 
  }

  get paisField() {  
    return this.formGroup.controls.pais; 
  }

  get dniField() {  
    return this.formGroup.controls.dni; 
  }

  get telefonoField() {  
    return this.formGroup.controls.telefono; 
  }

  get cantidaPagosField() {  
    return this.formGroup.controls.cantidaPagos; 
  }

  get comentarioField() {  
    return this.formGroup.controls.comentario; 
  }


/*
  validacionesFormulario() {
      if(this.form.value.nombre == '') {
        console.log("El campo nombre es obligatorio");
        return this.validationCampo.push("El campo nombre es obligatorio");
      }
  
      if(this.form.value.apellidos == '') {
        console.log("El campo apellidos es obligatorio");
        return this.validationCampo.push("El campo apellidos es obligatorio");
      }
  
      if(this.form.value.pais == '') {
        console.log("El campo pais es obligatorio");
        return this.validationCampo.push( "El campo pais es obligatorio");
      }
  
      if(this.form.value.dni == '') {
        console.log("El campo dni es obligatorio");
        return this.validationCampo.push("El campo dni es obligatorio") ;
      }
  
      if(this.form.value.telefono == '') {
        console.log("El campo telefono es obligatorio");
        return this.validationCampo.push("El campo telefono es obligatorio") ;
      }
  
      if(this.form.value.cantidaPagos == '') {
        console.log("El campo cantidadPagos es obligatorio");
        return this.validationCampo.push("El campo cantidadPagos es obligatorio") ;
      }
  
      if(this.form.value.comentario == '') {
        console.log("El campo comentario es obligatorio");
        return this.validationCampo.push( "El campo comentario es obligatorio");
      }
  
      // Add a return statement at the end of the function
      return null;
    }*/

}