import { Component, OnInit } from '@angular/core';
export interface WeekDay {
  dayName: string;
  dayNumber: number;
}
@Component({
  selector: 'app-weel-selection',
  templateUrl: './weel-selection.component.html',
  styleUrls: ['./weel-selection.component.scss']
})

export class WeelSelectionComponent implements OnInit {

  today: number;

  week: WeekDay[] = [
    { dayName: 'Mo', dayNumber: 1 },
    { dayName: 'Tue', dayNumber: 2 },
    { dayName: 'Wen', dayNumber: 3 },
    { dayName: 'Thu', dayNumber: 4 },
    { dayName: 'Fr', dayNumber: 5 },
    { dayName: 'Sat', dayNumber: 6 },
    { dayName: 'Sun', dayNumber: 7 }];

  constructor() { }

  ngOnInit(): void {
    this.today = new Date().getDay();
  }

}
