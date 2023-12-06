import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from './table/table.component';
import { TableShowComponent } from './table-show/table-show.component';

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'table', component: TableComponent },
  { path: 'table-show', component: TableShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
