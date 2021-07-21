import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
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
  constructor() { }
}
