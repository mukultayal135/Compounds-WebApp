import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { ShowModalService } from 'src/app/services/show-modal.service';
import { CompoundsService } from 'src/app/services/compounds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-compound',
  templateUrl: './new-compound.html',
  styleUrls: ['./new-compound.css'],
})
export class NewCompoundComponent {
  constructor(
    public showModalService: ShowModalService,
    private compoundService: CompoundsService,
    private router: Router
  ) {}

  onSubmit(f: NgForm) {
    const newCompound = {
      compoundName: f.value.name,
      compoundDescription: f.value.description,
      imageUrl: f.value.url,
    };
    this.compoundService.createCompound(newCompound).subscribe((compound) => {
      if (compound) {
        this.showModalService.showModal = false;
      }
    });
  }
}
