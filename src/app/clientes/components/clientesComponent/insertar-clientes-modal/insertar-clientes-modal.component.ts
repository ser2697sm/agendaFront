import { Component, inject } from '@angular/core';
import { ApiService } from '../../../service/cliente.service';
import { FormControl, FormGroup,FormArray, Validators,FormBuilder,ReactiveFormsModule } from '@angular/forms';
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
  listId: any[] = [];
  tramites: any[] = [];
  //validationCampo: String[] = [];
  valor: String = '';
  isChecked: boolean = false;

  constructor(private apiService: ApiService) {}

   // Inicializamos el FormBuilder en el constructor
   formGroup = this._formBuilder.nonNullable.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    pais: ['', Validators.required],
    dni: ['', Validators.required],
    telefono: ['', [Validators.required,CustomValidators.validationNumerodeTelefono]],
    tramites: ["", Validators.required],
    cantidaPagos: ['', Validators.required],
    comentario: ['', Validators.required]
  });

  ngOnInit() {
    this.verTramitesSinRepetir();
  }
  guardarSelected(id:number) {
    console.log(id)
  }
  /*guardarChecks(id: Number,nombreTramite:String) {
    var tramite = {
      id: id,
      nombre: nombreTramite
    }
    this.listId.push(tramite);
  }*/

  onSubmmit() {

    console.log(this.formGroup.value);   

    if (this.formGroup.valid) {
      console.log(this.formGroup.value.tramites);
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


      const checked = {
        checked : false
      }
      tramites.forEach((tramite: any) => { 
        tramite.checked = false;
      });

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
}