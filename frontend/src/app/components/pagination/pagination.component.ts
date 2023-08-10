import { Component, Input } from '@angular/core';
import { PagerType } from 'src/app/models/compound-type';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() pager: PagerType | undefined;
}
