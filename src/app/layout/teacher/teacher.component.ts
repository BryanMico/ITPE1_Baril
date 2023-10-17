import { Component, OnInit } from '@angular/core';
import { teachers_Data } from 'src/sharedData/teachersData';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  teachersData = teachers_Data;
  showDetails: boolean = false;
  currentTeacher: any;
  sortedTeachersData: any[];

  clickedDetails(teacher: any) {
    this.currentTeacher = teacher;
    this.showDetails = true;

  }

  goBackConfirm(value: boolean) {
    this.showDetails = false;

  }

  constructor() {
    this.sortedTeachersData = this.teachersData.slice();
    this.sortedTeachersData.sort((a, b) => {
      return a.teacherName.localeCompare(b.teacherName);
    });
  }

  ngOnInit(): void {
  }

}
