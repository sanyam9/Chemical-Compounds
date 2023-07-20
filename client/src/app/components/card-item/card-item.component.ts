import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input () compound: Compound;
  @Output() onDeleteCompound: EventEmitter<Compound> = new EventEmitter();
  @Output() onEditCompound: EventEmitter<Compound> = new EventEmitter();
  
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  
  onDelete(compound: Compound) {
    this.onDeleteCompound.emit(compound);
    // console.log(compound)
  }

  onEdit(compound: Compound) {
    // this.onEditCompound.emit(compound);
    console.log(compound)
  }

}
