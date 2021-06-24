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

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    OrderItemComponent,
    CustomerEditorComponent,
    OrderDetailsComponent,
    CheckoutComponent,
    OrderItemsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
