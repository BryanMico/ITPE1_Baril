import { Component, Input, OnInit } from '@angular/core';
import { students_Data } from 'src/sharedData/studentsData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() userImg: string = "";
  @Input() userName: string = "";
  @Input() userGender: string = "";
  @Input() userAge: string = "";
  @Input() userYear: string = "";
  @Input() userBlock: string = "";
  studentData = students_Data;
}
