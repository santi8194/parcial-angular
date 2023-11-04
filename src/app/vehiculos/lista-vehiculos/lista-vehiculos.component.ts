import {Component, OnInit} from '@angular/core';
import {Vehiculo} from '../../models/vehiculo'
import {VehiculosService} from "../vehiculos.service";

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit{
  vehiculos: Vehiculo[] = []

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit() {
    this.vehiculosService.getVehiculos().subscribe({
      next: (vehiculos) => {
        this.vehiculos = vehiculos;
      },
      error: (error: Console): void => {
        console.error('We are having trouble. Try again later', error);
        this.vehiculos = [];
      },
    });
  }

  getListaMarcas() {
    return Array.from(new Set(this.vehiculos.map(v => v.marca || "")))
  }

  contarMarca(marca: string) {
    return this.vehiculos.filter(v => v.marca === marca).length
  }

}
