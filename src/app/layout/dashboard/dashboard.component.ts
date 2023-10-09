import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  yourNameProperty: string = 'Bryan Mico V. Baril';
  yourGithubProperty: string = 'https://github.com/BryanMico';

}
