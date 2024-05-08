import { Component, OnInit } from '@angular/core';

import { Vehiculo } from '../../clases/vehiculo';
import { VehiculoService } from '../../servicios/vehiculo.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrl: './listar-vehiculos.component.css'
})
export class ListarVehiculosComponent implements OnInit {

  public vehiculos: Vehiculo[] = [];
  public pruebaComponente: Vehiculo[] = [
    {
      id: 1,
      marca: "Renault",
      linea: "Sandero",
      referencia: "Nueva Vida Auténtica",
      modelo: 2020,
      kilometraje: 25629,
      color: "Rojo",
      imagen: "https://cdn.group.renault.com/ren/co/vehicles/sandero/home/nuevo-renault-sandero-rojo-fuego.jpg.ximg.xsmall.jpg/0b9611c786.jpg"
    },
    {
      id: 2,
      marca: "Chevrolet",
      linea: "Chispa",
      referencia: "Vida",
      modelo: 2018,
      kilometraje: 55926,
      color: "Plata",
      imagen: "https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg"
    },
    {
      id: 3,
      marca: "Chevrolet",
      linea: "Navegar",
      referencia: "LT Sedan",
      modelo: 2016,
      kilometraje: 94321,
      color: "Rojo",
      imagen: "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail -rojo-01.png"
    }
  ];

  constructor(
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  private obtenerVehiculos() {
    this.vehiculoService.obtenerVehiculos()
      .subscribe((data: Vehiculo[]) => {
        this.vehiculos = data;
      });
  }


}
