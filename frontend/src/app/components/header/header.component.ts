import { Component } from '@angular/core';
import { ShowModalService } from 'src/app/services/show-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public showModalSerice: ShowModalService) {}
}
