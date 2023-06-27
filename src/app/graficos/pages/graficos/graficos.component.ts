import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

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

  public dataset: ChartDataset<'bar', number[]>[] = [
    {
      data: [0, -24, 9, 0, -13, -6, 0, -7],
      label: 'IE var',
      stack: 'A',
      backgroundColor: '#ffbc01',
    },
    {
      data: [371, 372, 372, 372, 372, 375, 375, 375],
      label: 'IE fijo',
      stack: 'A',
      backgroundColor: '#a4a4a4',
    },
    {
      data: [125, 129, 124, 122, 124, 122, 123, 124],
      label: 'IVA',
      stack: 'A',
      backgroundColor: '#fbfbfb',
    },
    {
      data: [660, 679, 651, 640, 651, 643, 649, 655],
      label: 'Costo ENAP',
      stack: 'A',
      backgroundColor: '#cbcbcb',
    },
  ];

  public datasetDiesel: ChartDataset<'bar', number[]>[] = [
    {
      data: [58, 54, 118, 140, 145, 148, 106, 116],
      label: 'IE var',
      stack: 'A',
      backgroundColor: '#ffbc01',
    },
    {
      data: [93, 93, 93, 93, 93, 94, 94, 94],
      label: 'IE fijo',
      stack: 'A',
      backgroundColor: '#a4a4a4',
    },
    {
      data: [143, 144, 133, 125, 124, 124, 127, 126],
      label: 'IVA',
      stack: 'A',
      backgroundColor: '#fbfbfb',
    },
    {
      data: [753, 756, 702, 658, 654, 651, 669, 661],
      label: 'Costo ENAP',
      stack: 'A',
      backgroundColor: '#cbcbcb',
    },
  ];
}
