import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionModalButtonComponent } from './accordion-modal-button.component';

describe('AccordionModalButtonComponent', () => {
  let component: AccordionModalButtonComponent;
  let fixture: ComponentFixture<AccordionModalButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionModalButtonComponent]
    });
    fixture = TestBed.createComponent(AccordionModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
