import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() itemData;
  @Input() isLast;
  quantity = [];
  currentSelection = 1;
  isJoinedWaitlist = false;
  saleMessage;
  saleDangerClass = false;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.populateQuantityArray();
    this.saleMessage = this.getSaleMessage(this.itemData.saleEndDate)
    this.currentSelection = this.itemData.selectionQuantity;
  }

  populateQuantityArray(): void {
    let i = 0;
    while (i <= 101) {
      this.quantity.push(i++);
    }
  }

  toggleWaitlistJoin(): void {
    this.isJoinedWaitlist = !this.isJoinedWaitlist;
  }

  removeFromWaitelist() {
    this.isJoinedWaitlist = false;
  }

  getSaleMessage(saleEndDate: Date): string {
    if (!saleEndDate) {
      return "";
    }
    let saleMessage = "";
    // Get a date 7 days ahead.
    let futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);
    // Check if saleEndDate is less than that(sale ends in less than 7 days)
    // then show the sale message
    if (saleEndDate.getTime() < futureDate.getTime()) {
      // Get next day
      let nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      // If sale ends in less than 24 hours, 
      // show message in hour and danger text
      if (saleEndDate.getTime() < nextDay.getTime()) {
        // Get the difference in days
        let hours = ((nextDay.getTime() - saleEndDate.getTime()) % 86400000) / 3600000;
        // Round the result
        hours = Math.ceil(24 - hours);
        this.saleDangerClass = true;
        return saleMessage = `Sale ends in ${hours} hours.`;
      }
      // Show message in days
      let days = (futureDate.getTime() - saleEndDate.getTime()) / 86400000; //Diference in Days;
      days = Math.ceil(7 - days);
      return saleMessage = `Sale ends in ${days} days.`;
    }
    return "";
  }
}
