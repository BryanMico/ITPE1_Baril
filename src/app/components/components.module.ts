import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';
import { TablestudentComponent } from './tablestudent/tablestudent.component';
import { Tableteachers2Component } from './tableteachers2/tableteachers2.component';



@NgModule({
  declarations: [CardsComponent, ButtonComponent, TableComponent, TableTeachersComponent, TablestudentComponent, Tableteachers2Component],
  imports: [
    CommonModule,

  ],
  exports: [
    CardsComponent,
    ButtonComponent,
    TableComponent,
    TableTeachersComponent,
    TablestudentComponent,
    Tableteachers2Component
  ]
})
export class ComponentsModule { }
