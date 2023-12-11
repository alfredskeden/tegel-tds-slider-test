import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-button-not-working',
  templateUrl: './modal-button-not-working.component.html',
  styleUrls: ['./modal-button-not-working.component.css'],
})
export class ModalButtonNotWorkingComponent {
  @Input() modalId: string = '';
}
