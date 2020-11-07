import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  date: Date;
  timestring: string;
  intervalID: any
  timeRunning: boolean

  constructor() {
    console.log('meldung aus Konstruktor');
  }

  ngOnInit(): void {
    this.intervalID = setInterval(() => this.showTime(), 1000)
    console.log('meldung aus OnInit');
    this.timeRunning = true;
  }

  showTime() {
    this.date = new Date();
    this.timestring = this.date.toLocaleTimeString();
  }
  stopTimer() {
    clearInterval(this.intervalID)
    this.timeRunning = false;
  }
  giveTrue():boolean {
    return true;
  }

}
