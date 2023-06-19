import { Component, Input } from '@angular/core';

@Component({
  selector: 'graficos-pentagono-texto',
  templateUrl: './pentagono-texto.component.html',
  styleUrls: ['./pentagono-texto.component.css'],
})
export class PentagonoTextoComponent {
  @Input() texto: string = '';
}
