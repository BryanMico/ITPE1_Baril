import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { students_Data } from 'src/sharedData/studentsData';

@Component({
  selector: 'app-student-cards',
  templateUrl: './student-cards.component.html',
  styleUrls: ['./student-cards.component.scss']
})
export class StudentCardsComponent implements OnInit {
  @Input() userDetail: any;

  @Output() goBack: EventEmitter<boolean> = new EventEmitter<boolean>();
  goBackConfirm(value: boolean) {
    this.goBack.emit(value);
  }
  constructor() { }


  ngOnInit(): void {
  }

}
