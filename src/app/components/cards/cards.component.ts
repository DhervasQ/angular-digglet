import { Component,Input,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() public cardArray!: any;
  @Input() public bicho!: any;
  @Output() public emitMessage = new EventEmitter<string>();
  public message: string = '';
  public setMessage(message: any): void {
    this.emitMessage.emit(message);
  }
}
