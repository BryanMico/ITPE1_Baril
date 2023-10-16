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

  clickedDetails(teacher: any) {
    this.currentTeacher = teacher;
    this.showDetails = true;

  }

  goBackConfirm(value: boolean) {
    this.showDetails = false;

  }

  ngOnInit(): void {
  }

}
