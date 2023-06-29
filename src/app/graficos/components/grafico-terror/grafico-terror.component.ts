import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ChartDataset, ChartConfiguration } from 'chart.js';
import { GraficosService } from '../../services/graficos-service.service';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'graficos-grafico-terror',
  templateUrl: './grafico-terror.component.html',
  styleUrls: ['./grafico-terror.component.css'],
})
export class GraficoTerrorComponent implements OnInit, OnDestroy {
  @Input() datasetInput: ChartDataset<'bar', number[]>[] = [];

  constructor(private graficosService: GraficosService) {}

  ngOnDestroy(): void {
    this.datasetInput.pop();
  }

  public totales: number[] = [];
  public diferencias: number[] = [];

  ngOnInit(): void {
    this.obtenerMaximos();
    this.datasetInput.push({
      data: this.totales,
      label: 'Total',
      stack: 'B',
    });
  }

  private obtenerMaximos() {
    const sumaPorPosicion: number[] = [];
    this.datasetInput.forEach((element) => {
      element.data.forEach((valor, index) => {
        if (!sumaPorPosicion[index]) {
          sumaPorPosicion[index] = 0;
        }
        sumaPorPosicion[index] += valor;
      });
    });
    this.totales = sumaPorPosicion;

    const diferencias: number[] = [];
    for (let i = 0; i < this.totales.length - 1; i++) {
      const diferencia = this.totales[i] - this.totales[i + 1];
      diferencias.push(diferencia);
    }
    this.diferencias = diferencias;
  }

  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];

  private test = {
    data: [0, -24, 9, 0, -13, -6, 0, -7],
    label: 'IE var',
  };

  private dataset: ChartDataset<'bar', number[]>[] = [
    {
      // ...this.test,
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

  private datasetDiesel: ChartDataset<'bar', number[]>[] = [
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

  public barChartLabels = [
    '26-ene',
    '2-feb',
    '9-feb',
    '16-feb',
    '23-feb',
    '2-mar',
    '9-mar',
    '16-mar',
  ];

  // public barChartData: ChartConfiguration<'bar'>['data'] = {
  //   labels: [
  //     '26-ene',
  //     '2-feb',
  //     '9-feb',
  //     '16-feb',
  //     '23-feb',
  //     '2-mar',
  //     '9-mar',
  //     '16-mar',
  //   ],
  //   datasets: this.datasetInput,
  // };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: {
        stacked: true,
        display: false,
      },
      x: {
        stacked: true,
        display: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        align: 'center',
        position: 'right',
      },
      datalabels: {
        anchor: 'center',
        align: 'center',
        // anchor(context) {
        //   const datasetIndex = context.datasetIndex;
        //   const allDatasets = context.chart.data.datasets;
        //   if (datasetIndex === allDatasets.length - 1) {
        //     return 'end';
        //   } else {
        //     return 'center';
        //   }
        // },
        // align(context) {
        //   const datasetIndex = context.datasetIndex;
        //   const allDatasets = context.chart.data.datasets;
        //   if (datasetIndex === allDatasets.length - 1) {
        //     return 'bottom';
        //   } else {
        //     return 'center';
        //   }
        // },
        font: {
          weight: 'bold',
        },
        // formatter: function (value, context) {
        //   const datasetIndex = context.datasetIndex;
        //   const dataIndex = context.dataIndex;
        //   const dataset = context.chart.data.datasets[datasetIndex];
        //   const allDatasets = context.chart.data.datasets;
        //   let total = 0;

        //   allDatasets.forEach((dataset) => {
        //     total += dataset.data[dataIndex] as number;
        //   });

        //   if (datasetIndex === allDatasets.length - 1) {
        //     const label1 = dataset.data[dataIndex];
        //     const label2 = `${total}`;
        //     return `${label2}\n\n\n${label1}`;
        //   } else {
        //     return dataset.data[dataIndex];
        //   }
        // },
      },
    },
  };
}
