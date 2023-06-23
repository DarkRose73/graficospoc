import { Component } from '@angular/core';
import { ChartDataset, ChartConfiguration } from 'chart.js';
import { GraficosService } from '../../services/graficos-service.service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'graficos-grafico-terror',
  templateUrl: './grafico-terror.component.html',
  styleUrls: ['./grafico-terror.component.css'],
})
export class GraficoTerrorComponent {
  constructor(private graficosService: GraficosService) {}

  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];
  // TODO: Definir colores de labels
  private dataset: ChartDataset<'bar', number[]>[] = [
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
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      datalabels: {
        anchor: 'center',
        font: {
          weight: 'bold',
        },
        // formatter: function (value, context) {
        //   // Obtener los valores o etiquetas correspondientes
        //   var dataset = context.dataset;
        //   var index = context.dataIndex;
        //   var values = dataset.data;

        //   // Crear una cadena con las etiquetas separadas por una coma
        //   var labels = ['Label 1', 'Label 2', 'Label 3']; // Ejemplo de etiquetas
        //   var labelString = labels[index];

        //   return labelString;
        // },
        // backgroundColor(context) {
        //   switch (context.datasetIndex) {
        //     case 0:
        //       return '#ffc400';
        //     default:
        //       return '';
        //   }
        // },
      },
      legend: {
        align: 'center',
        position: 'right',
      },
    },
  };
}
