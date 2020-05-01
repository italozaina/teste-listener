import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministracaoComponent } from './administracao.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';


const routes: Routes = [
  {path: "", component: AdministracaoComponent, children:[
    {path: "dashboard", component: DashboardComponent},
    {path: "usuarios", component: UsuarioComponent},
  ]},
  { path: "*", redirectTo: "dashboard"},
  { path: "**", redirectTo: "dashboard"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracaoRoutingModule { }
