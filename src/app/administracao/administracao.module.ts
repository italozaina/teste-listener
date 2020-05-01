import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AdministracaoRoutingModule } from './administracao-routing.module';
import { AdministracaoComponent } from './administracao.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SharedModule } from './shared/shared.module';
import { SeletorService } from '../service/seletor.service';


@NgModule({
  declarations: [AdministracaoComponent, DashboardComponent, UsuarioComponent],
  imports: [
    CommonModule,
    AdministracaoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SeletorService]
})
export class AdministracaoModule { }
