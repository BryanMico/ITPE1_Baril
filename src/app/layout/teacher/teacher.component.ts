import { Component, OnInit } from '@angular/core';
import { teachers_Data } from 'src/sharedData/teachersData';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  teachersData = teachers_Data;



  ngOnInit(): void {
  }

}
