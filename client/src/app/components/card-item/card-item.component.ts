import { Component, Input } from '@angular/core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input () compound: Compound;

  compoundName: string;
  compoundImage: string;
  compoundDescription: string;

  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  

}
