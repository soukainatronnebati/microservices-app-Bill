import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {InvoicesComponent} from "./invoices/invoices.component";
import {InvoiceDetailComponent} from "./invoice-detail/invoice-detail.component";

const routes: Routes = [
  {
    path : "products", component : ProductsComponent
  },
  {
    path : "customers", component : CustomersComponent
  },
  {
    path : "orders/:customerId", component : InvoicesComponent
  },
  {
    path : "order-details/:orderId", component : InvoiceDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
