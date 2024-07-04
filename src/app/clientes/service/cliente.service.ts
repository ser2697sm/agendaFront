import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   urlApi = "http://localhost:8081/api/clientes/verClientes";
  constructor(private http:HttpClient) { }

  public getClientes(page:number,size:number): Observable<any> {
    return this.http.get(`${this.urlApi}?page=${page}&size=${size}&sort=nombre,asc`);
  }

  public crearCliente(cliente:any): Observable<any> {
    return this.http.post(`${this.urlApi}/crearCliente`,cliente);
  }

  //ver tramites sin repetir
  public getTramitesSinRepetir(): Observable<any> {
    const urlApiCompleto = "http://localhost:8081/api/tramites/verTramitesSinDuplicar";
    console.log(urlApiCompleto);  
    return this.http.get(urlApiCompleto);
  }
}
