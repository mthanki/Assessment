import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit, OnChanges {
  shouldShowPromoField = false;
  @Input() orderData;
  @Input() buttonText: string = "Checkout";
  @Input() isEditable: boolean = false;

  subTotal = 0;
  total = 0;
  taxAmount = 0;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.orderData[0].orderItems.forEach(i => { this.subTotal += this.getTotalItemAmount(i) });
    this.taxAmount = this.orderData[0].taxAmount;
    this.total = this.subTotal + this.taxAmount;
  }

  getTotalItemAmount(item) {
    return item.price * item.quantity;
  }

  showPromoCodeInput(): void {
    this.shouldShowPromoField = true;
  }

  applyPromoCode(): void {
    // Call api service to check validity
  }

}
