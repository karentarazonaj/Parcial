import { Component, Input, OnChanges } from '@angular/core';

import { Vehiculo } from '../../clases/vehiculo';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrl: './tabla-vehiculos.component.css'
})
export class TablaVehiculosComponent implements OnChanges {

  @Input()
  public vehiculos: Vehiculo[] = [];

  public cantidadNissan: number = 0;
  public cantidadRenault: number = 0;
  public cantidadChevrolet: number = 0;

  ngOnChanges(): void { 
    this.obtenerCantidadVehiculosXMarca();
  }

  private obtenerCantidadVehiculosXMarca() {
    this.vehiculos.forEach((vehiculo) => {
      if (vehiculo.marca === 'Renault') {
        this.cantidadRenault += 1;
      } else if (vehiculo.marca === 'Chevrolet') {
        this.cantidadChevrolet += 1;
      } else {
        this.cantidadNissan += 1;
      }
    })
  }

}
