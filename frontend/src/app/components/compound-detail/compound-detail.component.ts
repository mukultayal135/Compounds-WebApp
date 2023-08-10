import { Component, OnInit } from '@angular/core';
import { CompoundType } from '../../models/compound-type';
import { ActivatedRoute } from '@angular/router';
import { CompoundsService } from 'src/app/services/compounds.service';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css'],
})
export class CompoundDetailComponent implements OnInit {
  compound: CompoundType | undefined | null;
  editableEnabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private compoundService: CompoundsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.compoundService
        .getCompoundById(Number(value.get('id')))
        .subscribe((compound) => {
          this.compound = compound;
        });
    });
  }
  enableEditing() {
    this.editableEnabled = true;
  }
  onSave(compoundName: string | null, compoundDescription: string | null) {
    this.editableEnabled = false;
    let newCompound: CompoundType;
    if (this.compound) {
      newCompound = {
        ...this.compound,
        compoundName,
        compoundDescription,
      };
      this.compoundService
        .updateCompound(this.compound?.id, newCompound)
        .subscribe((resp) => {
          if (resp) {
            this.compound = newCompound;
          }
        });
    }
  }
}
