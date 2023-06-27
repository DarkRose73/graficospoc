import { Component } from '@angular/core';

@Component({
  selector: 'graficos-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent {
  public mostrarGrafico1: boolean = false;
  public mostrarGraficoTerror: boolean = false;
  public selectedGasolina93A = 'producto';
  public selectedGasolina93B = 'planta';

  public selectedDieselA = 'producto';
  public selectedDieselB = 'planta';

  public cambiarGrafico(value: number) {
    if (value === 1) {
      this.mostrarGrafico1 = true;
      this.mostrarGraficoTerror = false;
    }
    if (value === 2) {
      this.mostrarGraficoTerror = true;
      this.mostrarGrafico1 = false;
    }
  }
}
