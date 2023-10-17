import { Component, OnInit } from '@angular/core';
import { students_Data } from 'src/sharedData/studentsData';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  studentData = students_Data;
  showDetails: boolean = false;
  currentStudent: any;
  sortedStudentData: any[];

  clickedDetails(student: any) {
    this.currentStudent = student;
    this.showDetails = true;

  }

  goBackConfirm(value: boolean) {
    this.showDetails = false;

  }

  constructor() {
    this.sortedStudentData = this.studentData.slice();
    this.sortedStudentData.sort((a, b) => {
      return a.studentName.localeCompare(b.studentName);
    });
  }
  ngOnInit(): void {
  }

}


