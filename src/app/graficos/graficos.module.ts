import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { PentagonoTextoComponent } from './components/pentagono-texto/pentagono-texto.component';
import { Grafico1Component } from './components/grafico1/grafico1.component';
import { GraficoTerrorComponent } from './components/grafico-terror/grafico-terror.component';

@NgModule({
  declarations: [GraficosComponent, PentagonoTextoComponent, Grafico1Component, GraficoTerrorComponent],
  imports: [CommonModule],
  exports: [GraficosComponent],
})
export class GraficosModule {}
