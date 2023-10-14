import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';


@NgModule({
  declarations: [CardsComponent, ButtonComponent, TableComponent, TableTeachersComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    CardsComponent,
    ButtonComponent,
    TableComponent,
    TableTeachersComponent
  ]
})
export class ComponentsModule { }
