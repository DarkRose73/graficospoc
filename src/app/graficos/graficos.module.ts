import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Grafico1Component } from './components/grafico1/grafico1.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { GraficoTerrorComponent } from './components/grafico-terror/grafico-terror.component';
import { PentagonoTextoComponent } from './components/pentagono-texto/pentagono-texto.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    Grafico1Component,
    GraficosComponent,
    GraficoTerrorComponent,
    PentagonoTextoComponent,
  ],
  imports: [CommonModule, NgChartsModule],
  exports: [GraficosComponent],
})
export class GraficosModule {}
