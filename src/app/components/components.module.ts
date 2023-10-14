import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [CardsComponent, ButtonComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    CardsComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
