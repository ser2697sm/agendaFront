import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Import the ApiService

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent implements OnInit { // Implement OnInit interface
  clientes: any[] = [];
  p: number = 1;
  size: number = 10;
  totalElements: number = 0;
  totalPage: number = 0;
  page!: number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getClientes(this.p -1,this.size).subscribe((clientes: any) => {
      this.clientes = clientes.content;
      this.totalElements = clientes.totalElements;
      this.totalPage = clientes.totalPages;
    },(error) =>{
      console.log(error);
    })
  }

  onPageChange(página: number): void { 
    this.p = página; 
    this.llenarData(); 
  } 
}
