import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarVehiculosComponent } from './paginas/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listar-vehiculos',
        component: ListarVehiculosComponent,
        title: 'Listado de Vehiculos'
      },
      {
        path: '**',
        redirectTo: 'listar-vehiculos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
