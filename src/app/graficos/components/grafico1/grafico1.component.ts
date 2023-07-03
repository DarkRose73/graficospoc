import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartDataset } from 'chart.js';
import { GraficosService } from '../../services/graficos-service.service';

@Component({
  selector: 'graficos-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css'],
})
export class Grafico1Component implements OnInit {
  @Input() datasetInput: ChartDataset<'bar', number[]>[] = [];
  @Input() labelsInput: string[] = [];

  constructor(private graficosService: GraficosService) {}

  ngOnInit(): void {
    // Normalizar data para que se muestre como bloques de porcentaje (0-100%)
    this.datasetInput = this.graficosService.normalizarDataGraficoBarra(
      this.datasetInput
    );
  }

  // OPCIONES GRAFICO

  public barChartLegend = true;
  public barChartPlugins = [];
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
