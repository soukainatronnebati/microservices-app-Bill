import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent implements OnInit{
  invoices :any;
  customerId!:number;
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/orders/search/byCustomerId?projection=fullOrder&customerId="+this.customerId)
      .subscribe({
        next : (data)=>{
          this.invoices=data;
        },
        error : (err)=>{}
      });
  }

  getInvoiceDetails(o: any) {
    this.router.navigateByUrl("/invoice-details/"+o.id);
  }

}
