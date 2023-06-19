import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NORMALIZED_DATA } from './data';

@Component({
  selector: 'graficos-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css'],
})
export class Grafico1Component {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['', '', '', '', '', '', ''],
    datasets: NORMALIZED_DATA,
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,

    scales: {
      x: {
        title: {
          display: true,
          text: 'Producto',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Impuesto',
        },
        ticks: {
          callback: (value) => {
            return value + '%';
          },
        },
      },
    },
  };

  constructor() {}
}
