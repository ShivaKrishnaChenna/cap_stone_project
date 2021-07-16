import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id : string;
  product : Product;
  tax : number;
  totalToPay: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private rest: RestApiService,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }

  public getProduct(id) {
    this.rest.getProduct(id)
      .then((product : Product ) => {
        console.log(product);
        this.product = product;
        this.tax = parseInt(this.product.price)*13/100;
        this.totalToPay = parseInt(this.product.price) + this.tax;
      });
  }

  public placeOrder() {
    this.product = null;
    this.router.navigate(['tracking-detials']);
  }

}
