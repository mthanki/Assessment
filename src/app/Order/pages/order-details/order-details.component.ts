import { Component, OnInit } from '@angular/core';

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
          name: "Free Ticker",
          price: 0,
          isWaitlisted: false,
        },
        {
          quantity: 2,
          name: "Alumni VIP Ticket",
          price: 3500.00,
        }
      ],
      taxAmount: 289.42
    }
  ]

  buttonText: string = "Checkout";
  isEditable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
