import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-compound-form',
  templateUrl: './compound-form.component.html',
  styleUrls: ['./compound-form.component.css']
})
export class CompoundFormComponent implements OnInit {
  id: string;
  name: string;
  description: string;
  image: string;
  operation: string = 'Add';

  constructor(private route: ActivatedRoute, private compoundService: CompoundService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.compoundService.getCompoundById(this.id).subscribe(compound => {
        this.name = compound.compoundName;
        this.description = compound.compoundDescription
        this.image = compound.compoundImage
        this.operation = 'Update';
      });
    }
  }

  onSubmit() {
    if ( !this.name || !this.description || !this.image) {
      alert('Please fill in all fields');
      return;
    }

    if ( this.operation === 'Add'){
      const newCompound = {
        compoundName: this.name,
        compoundDescription: this.description,
        compoundImage: this.image
      };
      this.compoundService.addCompound(newCompound).subscribe(() => {
        alert('Compound added!');
      });
      
      this.name = '';
      this.description = '';
      this.image = '';

      
    }
    else {
      const updatedCompound = {
        id: Number(this.id),
        compoundName: this.name,
        compoundDescription: this.description,
        compoundImage: this.image
      };
      this.compoundService.updateCompound(updatedCompound).subscribe(() => {
        alert('Compound updated!');
      });
    }
  }
}
