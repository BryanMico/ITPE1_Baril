import { Component, OnInit } from '@angular/core';
import { students_Data } from 'src/sharedData/studentsData';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentsData = students_Data;
  ngOnInit(): void {
  }

}


