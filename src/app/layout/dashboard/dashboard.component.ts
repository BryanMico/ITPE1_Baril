import { Component, OnInit } from '@angular/core';
import { cardData } from 'src/sharedData/dashboardData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  card_data = cardData;
  ngOnInit(): void {
    console.log(this.card_data)
  }

}
