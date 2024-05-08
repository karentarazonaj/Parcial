import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { TablaVehiculosComponent } from './componentes/tabla-vehiculos/tabla-vehiculos.component';
import { ListarVehiculosComponent } from './paginas/listar-vehiculos/listar-vehiculos.component';


@NgModule({
  declarations: [
    TablaVehiculosComponent,
    ListarVehiculosComponent
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
