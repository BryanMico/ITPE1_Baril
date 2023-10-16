import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { TeacherCardsComponent } from './teacher-cards/teacher-cards.component';




@NgModule({
  declarations: [CardsComponent, ButtonComponent, StudentCardsComponent, TeacherCardsComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    CardsComponent,
    ButtonComponent,
    StudentCardsComponent,
    TeacherCardsComponent

  ]
})
export class ComponentsModule { }
