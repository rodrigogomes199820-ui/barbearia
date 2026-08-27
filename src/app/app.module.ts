import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material/material.module';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './main/main.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DialogClienteComponent } from './pages/clientes/dialog-cliente/dialog-cliente.component';
import { DialogBaseComponent } from './shared/components/dialog-base/dialog-base.component';
import { DialogEditarClienteComponent } from './pages/clientes/dialog-editar-cliente/dialog-editar-cliente.component';
import { DialogExcluirClienteComponent } from './pages/clientes/dialog-excluir-cliente/dialog-excluir-cliente.component';
import { DialogHistoricoClienteComponent } from './pages/clientes/dialog-historico-cliente/dialog-historico-cliente.component';
import { BarbeirosComponent } from './pages/barbeiros/barbeiros.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    
    MainComponent,
         ClientesComponent,
         DialogClienteComponent,
         DialogBaseComponent,
         DialogEditarClienteComponent,
         DialogExcluirClienteComponent,
         DialogHistoricoClienteComponent,
         BarbeirosComponent,
        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }