import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-modal-button',
  templateUrl: './accordion-modal-button.component.html',
  styleUrls: ['./accordion-modal-button.component.css'],
})
export class AccordionModalButtonComponent {
  expandThis = 0;

  expand = (theNumber: number) => {
    this.expandThis = theNumber;
  };
}
