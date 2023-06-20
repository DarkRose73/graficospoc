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
    { data: [653, 250, 1000, 100, 56, 55, 40], label: 'ROJO', stack: 'A' },
    { data: [282, 250, 250, 20, 86, 27, 90], label: 'AZUL', stack: 'A' },
  ];

  public datasetNormalizado = this.graficosService.normalizarDataGraficoBarra(
    this.dataset
  );

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['', '', '', '', '', '', ''],
    datasets: this.datasetNormalizado,
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
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
}
