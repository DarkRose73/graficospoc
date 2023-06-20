import { Component } from '@angular/core';
import { ChartDataset, ChartConfiguration } from 'chart.js';
import { GraficosService } from '../../services/graficos-service.service';

@Component({
  selector: 'graficos-grafico-terror',
  templateUrl: './grafico-terror.component.html',
  styleUrls: ['./grafico-terror.component.css'],
})
export class GraficoTerrorComponent {
  constructor(private graficosService: GraficosService) {}

  public barChartLegend = true;
  public barChartPlugins = [];
  private dataset: ChartDataset<'bar', number[]>[] = [
    { data: [0, -24, 9, 0, -13, -6, 0, -7], label: 'IE var', stack: 'A' },
    {
      data: [371, 372, 372, 372, 372, 375, 375, 375],
      label: 'IE fijo',
      stack: 'A',
      pointStyle: 'circle',
    },
    {
      data: [125, 129, 124, 122, 124, 122, 123, 124],
      label: 'IVA',
      stack: 'A',
    },
    {
      data: [660, 679, 651, 640, 651, 643, 649, 655],
      label: 'Costo ENAP',
      stack: 'A',
    },
  ];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      '26-ene',
      '2-feb',
      '9-feb',
      '16-feb',
      '23-feb',
      '2-mar',
      '9-mar',
      '16-mar',
    ],
    datasets: this.dataset,
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        align: 'center',
        position: 'right',
      },
    },
  };
}
