import { Component } from '@angular/core';
import { ShowModalService } from './services/show-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  constructor(public showModalService: ShowModalService) {}
}
