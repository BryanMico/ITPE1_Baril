import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-teacher-cards',
  templateUrl: './teacher-cards.component.html',
  styleUrls: ['./teacher-cards.component.scss']
})
export class TeacherCardsComponent implements OnInit {
  @Input() userDetail: any;

  @Output()
  goBack: EventEmitter<boolean> = new EventEmitter<boolean>();
  goBackConfirm(value: boolean) {
    this.goBack.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
