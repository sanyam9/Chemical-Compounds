import { Component } from '@angular/core';
import { COMPOUNDS } from 'src/app/mock-compounds';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  compounds: Compound[] = COMPOUNDS;

}
