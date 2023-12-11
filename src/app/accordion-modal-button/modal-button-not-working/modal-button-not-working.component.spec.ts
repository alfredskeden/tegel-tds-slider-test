import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButtonNotWorkingComponent } from './modal-button-not-working.component';

describe('ModalButtonNotWorkingComponent', () => {
  let component: ModalButtonNotWorkingComponent;
  let fixture: ComponentFixture<ModalButtonNotWorkingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalButtonNotWorkingComponent]
    });
    fixture = TestBed.createComponent(ModalButtonNotWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
