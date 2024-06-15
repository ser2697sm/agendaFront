import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "http://localhost:8080/api/clientes/verClientes";
  constructor(private http:HttpClient) { }

  public getClientes(page:number,size:number): Observable<any> {
    const urlApiCompleto = "http://localhost:8080/api/clientes/verClientes" + `?page=${page}&size=${size}&sort=nombre,asc`;
    console.log(urlApiCompleto);
    return this.http.get(urlApiCompleto);
  }
}
