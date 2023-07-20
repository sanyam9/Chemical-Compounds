import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundService } from 'src/app/services/compound.service';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  id: string;
  compound: Compound;
  constructor(private route: ActivatedRoute, private compoundService: CompoundService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.compoundService.getCompoundById(this.id).subscribe((compound) => (this.compound = compound));
  }; 


}
