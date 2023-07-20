import { Component, OnInit } from '@angular/core';
import { Compound } from 'src/app/types/compound';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  compounds: Compound[];

  constructor(private compoundService: CompoundService) {}

  ngOnInit(): void {
    this.compoundService.getCompounds().subscribe(compounds => {
      this.compounds = compounds;
    });
  }

  deleteCompound(compound: Compound) {
    this.compoundService.deleteCompound(compound).subscribe(() => {
      this.compounds = this.compounds.filter(t => t.id !== compound.id);
    });
  }

  editCompound(compound: Compound) {
    this.compoundService.updateCompound(compound).subscribe(compound => {
      console.log(compound);
    });
  }
  
}
