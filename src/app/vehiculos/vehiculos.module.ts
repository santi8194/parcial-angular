import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';



@NgModule({
    declarations: [
        ListaVehiculosComponent
    ],
    exports: [
        ListaVehiculosComponent
    ],
    imports: [
        CommonModule
    ]
})
export class VehiculosModule { }
