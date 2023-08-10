import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompoundType } from '../../models/compound-type';
import { CompoundsService } from 'src/app/services/compounds.service';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css'],
})
export class CompoundComponent {
  @Input() compound!: CompoundType;
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  constructor(private compoundService: CompoundsService) {}
  deleteCompound(id: number) {
    this.onDelete.emit(id);
  }
}
