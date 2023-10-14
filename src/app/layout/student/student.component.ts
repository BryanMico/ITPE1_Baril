import { Component, OnInit } from '@angular/core';
import { students_Data } from 'src/sharedData/studentsData';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentData = students_Data;
  currentStudentIndex = 0;
  currentStudent = this.studentData[this.currentStudentIndex];

  nextStudent() {
    this.currentStudentIndex++;
    if (this.currentStudentIndex >= this.studentData.length) {
      this.currentStudentIndex = 0;
    }
    this.currentStudent = this.studentData[this.currentStudentIndex];
  }
  prevStudent() {
    this.currentStudentIndex--;
    if (this.currentStudentIndex >= this.studentData.length) {
      this.currentStudentIndex = 0;
    }
    this.currentStudent = this.studentData[this.currentStudentIndex];
  }
  ngOnInit(): void {
  }

}
