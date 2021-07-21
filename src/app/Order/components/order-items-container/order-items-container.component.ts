import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrderItem } from '../../Models/orderItem.model';

@Component({
  selector: 'app-order-items-container',
  templateUrl: './order-items-container.component.html',
  styleUrls: ['./order-items-container.component.scss']
})
export class OrderItemsContainerComponent implements OnInit {
  @Output() ticketSelectionChanged: EventEmitter<OrderItem> = new EventEmitter<OrderItem>();

  saleEndDateInHours = new Date();
  saleEndDateInDays = new Date();
  data = [
    {
      item: new OrderItem("Free Ticket", "Free ticket for anyone to make a valuable contribution towards our future online events programme. Thank you.", 0),
      selectionQuantity: 0,
      saleEndDate: this.saleEndDateInHours,
      saleText: "Sale ends in 1 hour",
      availableQuantity: 2,
      isDonate: false,
    },
    {
      item: new OrderItem("Alumni Base Ticket", "This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime", 95.99),
      selectionQuantity: 3,
      // imageUrl: "assets/images/item-image.png",
      saleEndDate: this.saleEndDateInDays,
      // saleText: "Sale ends in 1 hour",
      availableQuantity: 1,
      isDonate: false,
    },
    {
      item: new OrderItem("Alumni VIP Ticket", "This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime", 3500.00),
      selectionQuantity: 2,
      // imageUrl: "assets/images/item-image.png",
      saleEndDate: this.saleEndDateInDays,
      // saleText: "Sale ends in 1 hour",
      availableQuantity: 0,
      isDonate: false,
    },
    {
      item: new OrderItem("Donate", "Access to arts is vital. Pay what you can.", 0),
      isDonate: true,
    },
    {
      item: new OrderItem("Book: Good Strategy - Bad Strategy", "Learn from the experts of business process management", 17.99),
      selectionQuantity: 0,
      availableQuantity: 100,
      imageUrl: "assets/images/item-image.png",
      isDonate: false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.saleEndDateInHours.setHours(this.saleEndDateInHours.getHours() + 5);
    this.saleEndDateInDays.setDate(this.saleEndDateInDays.getDate() + 5);
  }

  propoateChange(itemsSelection): void {
    this.ticketSelectionChanged.emit(itemsSelection);
  }

}
