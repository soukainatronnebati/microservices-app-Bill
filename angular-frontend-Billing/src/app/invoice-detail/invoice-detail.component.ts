import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrl: './invoice-detail.component.css'
})
export class InvoiceDetailComponent implements OnInit{
  invoiceDetails :any;
  invoiceId!:number;
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
    this.invoiceId=route.snapshot.params['invoiceId'];
  }

  ngOnInit(): void {
    this.http.get("http://localhost:9999/order-service/fullOrder/"+this.invoiceId)
      .subscribe({
        next : (data)=>{
          this.invoiceDetails=data;
        },
        error : (err)=>{}
      });
  }

  getInvoiceDetails(o: any) {
    this.router.navigateByUrl("/invoice-details/"+o.id);
  }

}
