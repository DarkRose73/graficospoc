import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { PentagonoTextoComponent } from './components/pentagono-texto/pentagono-texto.component';

@NgModule({
  declarations: [GraficosComponent, PentagonoTextoComponent],
  imports: [CommonModule],
  exports: [GraficosComponent],
})
export class GraficosModule {}
