import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.scss']
})
export class PuntuacionComponent {
  @Input() public puntos!: any;
  @Input() public segundos!: any;

}
