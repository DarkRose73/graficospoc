const dataset = [
  { data: [653, 250, 1000, 100, 56, 55, 40], label: 'ROJO', stack: 'A' },
  { data: [282, 250, 250, 20, 86, 27, 90], label: 'AZUL', stack: 'A' },
];

// Calcular el total para cada punto del dataset
const totals: number[] = dataset[0].data.map((_, dataIndex) =>
  dataset.reduce((sum, series) => sum + series.data[dataIndex], 0)
);

// Calcular los datos normalizados
export const NORMALIZED_DATA = dataset.map((series) => ({
  data: series.data.map(
    (value, dataIndex) => (value / totals[dataIndex]) * 100
  ),
  label: series.label,
  stack: series.stack,
}));
