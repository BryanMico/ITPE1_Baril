import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablestudent',
  templateUrl: './tablestudent.component.html',
  styleUrls: ['./tablestudent.component.scss']
})
export class TablestudentComponent {

  @Input() studentImg: string = "";
  @Input() Name: string = "";
  @Input() Course: string = "";
  @Input() studentID: string = "";

}
