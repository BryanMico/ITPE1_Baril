import { Component, OnInit } from '@angular/core';
import { teachers_Data } from 'src/sharedData/teachersData';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  teachersData = teachers_Data;
  currentTeacherIndex = 0;
  currentTeacher = this.teachersData[this.currentTeacherIndex];

  nextTeacher() {
    this.currentTeacherIndex++;
    if (this.currentTeacherIndex >= this.teachersData.length) {
      this.currentTeacherIndex = 0;
    }
    this.currentTeacher = this.teachersData[this.currentTeacherIndex];
  }
  prevTeacher() {
    this.currentTeacherIndex--;
    if (this.currentTeacherIndex >= this.teachersData.length) {
      this.currentTeacherIndex = 0;
    }
    this.currentTeacher = this.teachersData[this.currentTeacherIndex];
  }

  ngOnInit(): void {
  }

}
