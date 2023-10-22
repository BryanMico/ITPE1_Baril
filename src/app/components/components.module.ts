import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';

import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [CardsComponent, ButtonComponent, TableComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    CardsComponent,
    ButtonComponent,
    TableComponent

  ]
})
export class ComponentsModule { }
