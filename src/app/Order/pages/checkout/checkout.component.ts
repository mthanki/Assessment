import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isEditable = true;
  buttonText = "Review Sessions";

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
  }

}
