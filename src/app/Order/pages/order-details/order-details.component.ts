import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  data = [
    {
      orderItems: [
        {
          quantity: 1,
          name: "Free Ticket",
          price: 0,
          isWaitlisted: false,
        },
        {
          quantity: 2,
          name: "Alumni VIP Ticket",
          price: 3500.00,
        },
        {
          quantity: 2,
          name: "Alumni Base Ticket",
          price: 95.99,
        },
        {
          quantity: 5,
          name: "Book: Good Strategy - Bad Strategy",
          price: 17.99
        }
      ],
      taxAmount: 289.42
    }
  ]

  buttonText: string = "Checkout";
  isEditable: boolean = false;

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

  updateOrderSummary(ticketData) {
    let itemIndex = this.orderService.data[0].orderItems.findIndex(item => item.name === ticketData.name);
    this.orderService.data[0].orderItems[itemIndex].quantity = ticketData.quantity;
  }

}
