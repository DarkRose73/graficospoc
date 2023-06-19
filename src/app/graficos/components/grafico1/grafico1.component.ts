import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'graficos-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css'],
})
export class Grafico1Component {
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'A' },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {}
}
