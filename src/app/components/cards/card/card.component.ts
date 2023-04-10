import { Component,Output,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() public emitMessage = new EventEmitter<any>();
  @Input() public bicho!: any;
  @Input() public datos!: any;
  clickSelect(id: any) {
    if (this.bicho.id === id) {
      this.emitMessage.emit({id});
    } 
  }
}
