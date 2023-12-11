import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NewComponent } from './new/new.component';
import { TableComponent } from './table/table.component';
import { TableShowComponent } from './table-show/table-show.component';
import { AccordionModalButtonComponent } from './accordion-modal-button/accordion-modal-button.component';
import { ModalButtonComponent } from './accordion-modal-button/modal-button/modal-button.component';
import { ModalButtonNotWorkingComponent } from './accordion-modal-button/modal-button-not-working/modal-button-not-working.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NewComponent,
    TableComponent,
    TableShowComponent,
    AccordionModalButtonComponent,
    ModalButtonComponent,
    ModalButtonNotWorkingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
