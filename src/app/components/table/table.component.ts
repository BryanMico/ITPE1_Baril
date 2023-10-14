import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() studentImg: string = "";
  @Input() Name: string = "";
  @Input() Course: string = "";
  @Input() studentID: string = "";





}
