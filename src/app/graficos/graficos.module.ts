import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

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
  imports: [CommonModule, NgChartsModule, MatButtonModule, MatSelectModule],
  exports: [GraficosComponent],
})
export class GraficosModule {}
