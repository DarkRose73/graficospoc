import { Injectable } from '@angular/core';
import { ChartDataset } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class GraficosService {
  constructor() {}

  // funcion para normalizar la data y que sea entre 0 y 100%
  // tambien puede normalizar parametros del dataset, como por ejemplo las labels y otras cosas
  normalizarDataGraficoBarra(dataset: ChartDataset[]) {
    // Calcular el total para cada punto del dataset
    let totals: number[] = dataset[0].data.map((_, dataIndex: number) =>
      dataset.reduce(
        (sum: any, series: ChartDataset) => sum + series.data[dataIndex],
        0
      )
    );

    // Calcular los datos normalizados
    let normalizedData: ChartDataset<'bar', number[]>[] = dataset.map(
      (series: ChartDataset) => ({
        data: series.data.map(
          (value: any, dataIndex: any) => (value / totals[dataIndex]) * 100
        ),
        label: series.label,
        stack: series.stack,
      })
    );
    return normalizedData;
  }
}
