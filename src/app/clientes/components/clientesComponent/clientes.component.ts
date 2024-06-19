import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/cliente.service';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit { // Implement OnInit interface
 
  clientes: any[] = [];
  tramites: any[] = [];
  p: number = 1;
  size: number = 10;
  totalElements: number = 0;
  totalPage: number = 0;
  page!: number;
  form: FormGroup;

  constructor(private apiService: ApiService,private formBuilder: FormBuilder) {
    // Inicializamos el FormBuilder en el constructor
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      pais: ['', Validators.required],
      dni: ['', Validators.required],
      telefono: ['', Validators.required],
      tramites: ['', Validators.required],
      cantidaPagos: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  

  ngOnInit() {
    this.llenarData();
  
  }

  onSubmmit() {
    console.log("Formulario enviado");
  }

  llenarData() {
    this.apiService.getClientes(this.p -1,this.size).subscribe((clientes: any) => {
      this.clientes = clientes.content;
      console.log(clientes);
      this.totalElements = clientes.totalElements;
      this.totalPage = clientes.totalPages;
    },(error) =>{
      console.log(error);
    });
  }

  onPageChange(página: number): void { 
    this.p = página; 
    this.llenarData(); 
  }
  


}
