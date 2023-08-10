import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowModalService {
  showModal: boolean = false;

  constructor() {}
}
