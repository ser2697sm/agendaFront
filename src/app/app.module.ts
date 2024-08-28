import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/components/clientesComponent/clientes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TramitesComponent } from './clientes/components/tramitesComponent/tramites.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertarClientesModalComponent } from './clientes/components/clientesComponent/insertar-clientes-modal/insertar-clientes-modal.component';


@NgModule({
    declarations: [
        AppComponent,
        ClientesComponent,
        TramitesComponent,
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbPaginationModule,
        NgbAlertModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        InsertarClientesModalComponent
    ]
})
export class AppModule { }
