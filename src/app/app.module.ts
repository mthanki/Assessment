import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './Order/components/order-summary/order-summary.component';
import { OrderItemComponent } from './Order/components/order-item/order-item.component';
import { CustomerEditorComponent } from './Order/components/customer-editor/customer-editor.component';
import { OrderDetailsComponent } from './Order/pages/order-details/order-details.component';
import { CheckoutComponent } from './Order/pages/checkout/checkout.component';
import { OrderItemsContainerComponent } from './Order/components/order-items-container/order-items-container.component';
import { TicketInfoComponent } from './Order/components/ticket-info/ticket-info.component';
import { OrderStatusComponent } from './Order/components/order-status/order-status.component';
import { TicketFormContainerComponent } from './Order/components/ticket-form-container/ticket-form-container.component';
import { CustomerInfoEditorComponent } from './Order/components/customer-info-editor/customer-info-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    OrderItemComponent,
    CustomerEditorComponent,
    OrderDetailsComponent,
    CheckoutComponent,
    OrderItemsContainerComponent,
    TicketInfoComponent,
    OrderStatusComponent,
    TicketFormContainerComponent,
    CustomerInfoEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
