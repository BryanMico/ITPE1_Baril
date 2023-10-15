import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableteachers2',
  templateUrl: './tableteachers2.component.html',
  styleUrls: ['./tableteachers2.component.scss']
})
export class Tableteachers2Component {

  @Input() teachersImg: string = "";
  @Input() teacherName: string = "";
  @Input() Subject: string = "";
  @Input() teachersID: string = "";



}
