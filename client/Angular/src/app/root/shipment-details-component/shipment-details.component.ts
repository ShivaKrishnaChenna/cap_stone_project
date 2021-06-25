import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
    private rest: RestApiService,) { }

  id : string;
  product : Product;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProduct(this.id);
  }

  public getProduct(id) {
    this.rest.getProduct(id)
      .then((product : Product ) => {
        this.product = product;
      });
  }

}
