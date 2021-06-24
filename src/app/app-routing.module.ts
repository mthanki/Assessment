import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './Order/pages/checkout/checkout.component';
import { OrderDetailsComponent } from './Order/pages/order-details/order-details.component';

const routes: Routes = [
  { path: 'order-overview', component: OrderDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: 'order-overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
