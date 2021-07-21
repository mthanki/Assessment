import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderItem } from '../../Models/orderItem.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() itemData;
  @Input() isLast;
  @Output() ticketSelectionChanged: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();

  quantity = [];
  currentSelection = 1;
  isJoinedWaitlist = false;
  saleMessage;
  saleDangerClass = false;

  donateOptions = [50, 100, 200, 500];
  donationAmountSelected = 0;

  constructor() { }

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

  propogateChange() {
    this.isJoinedWaitlist = false;
    this.ticketSelectionChanged.emit({ ...this.itemData.item, quantity: this.currentSelection });
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

  selectDonateAmount(amount) {
    this.donationAmountSelected = amount;
  }
}
