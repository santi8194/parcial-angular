import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListaVehiculosComponent} from './lista-vehiculos.component';
import {DebugElement} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {VehiculosService} from "../vehiculos.service";
import {Vehiculo} from "../../models/vehiculo";
import {faker} from '@faker-js/faker';
import {By} from "@angular/platform-browser";

describe('ListaVehiculosComponent', () => {
    let component: ListaVehiculosComponent;
    let fixture: ComponentFixture<ListaVehiculosComponent>;
    let debug: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [ListaVehiculosComponent],
            providers: [VehiculosService],
        });
        fixture = TestBed.createComponent(ListaVehiculosComponent);
        component = fixture.componentInstance;

        component.vehiculos = []
        for (let i = 0; i < 3; i++) {
            const vehiculo = new Vehiculo();
            vehiculo.id = faker.string.uuid()
            vehiculo.marca = faker.vehicle.manufacturer()
            vehiculo.modelo = faker.vehicle.model()
            vehiculo.linea = faker.vehicle.type()
            component.vehiculos.push(vehiculo);
        }
        fixture.detectChanges();
        debug = fixture.debugElement;
    });

    it('should create table with 3 vehicles', () => {
        const tr = debug.queryAll(By.css('tr'))
        expect(tr.length).toEqual(4)
    });
});