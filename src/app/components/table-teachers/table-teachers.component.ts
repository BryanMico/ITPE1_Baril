import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-teachers',
  templateUrl: './table-teachers.component.html',
  styleUrls: ['./table-teachers.component.scss']
})
export class TableTeachersComponent {
  @Input() teachersImg: string = "";
  @Input() teacherName: string = "";
  @Input() Subject: string = "";
  @Input() teachersID: string = "";


}
