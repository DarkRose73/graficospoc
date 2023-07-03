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
  @Input() labelsInput: string[] = [];

  constructor(private graficosService: GraficosService) {}

  ngOnDestroy(): void {
    // Eliminar el último registro (totales) para que no se vayan repitiendo
    this.datasetInput.pop();
  }

  public totales: number[] = [];

  ngOnInit(): void {
    this.obtenerMaximos();
    this.datasetInput.push({
      data: this.totales,
      label: 'Total',
      stack: 'B',
      // Funcion para cambiar dinámicamente los colores
      backgroundColor(ctx, options) {
        // color por defecto
        let color = 'yellow';

        // obtener variaciones
        const diferencias: number[] = [0];
        for (let i = 0; i < ctx.dataset.data.length - 1; i++) {
          const diferencia = ctx.dataset.data[i + 1] - ctx.dataset.data[i];
          diferencias.push(diferencia);
        }

        // Cambiar color del gráfico
        for (let index = 0; index < diferencias.length; index++) {
          if (index === ctx.dataIndex) {
            // Variación disminuye
            if (diferencias[index] < 0) {
              return 'red';
            }
            // No hay variación
            else if (diferencias[index] === 0) {
              return 'cyan';
            }
            // Variación aumenta
            else if (diferencias[index] > 0) {
              return 'green';
            }
          }
        }
        return color;
      },
    });
  }

  // Función para obtener los totales de los gráficos
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
  }

  // OPCIONES GRÁFICO
  public barChartLegend = true;
  public barChartPlugins = [DataLabelsPlugin];
  // Dentro de las opciones se pueden configurar los plug-ins y más opciones del gráfico
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
        font: {
          weight: 'bold',
        },
      },
    },
  };
}
