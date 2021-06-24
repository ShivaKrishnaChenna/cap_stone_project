import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-tracking-details',
  templateUrl: './tracking-details.component.html',
  styleUrls: ['./tracking-details.component.css']
})
export class TrackingDetailsComponent implements OnInit {

  public products : Product[];

  constructor(
    private router: Router,
    private rest: RestApiService,
    private globalService: GlobalDataManager) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.rest.getProducts()
      .then((products : Product[] ) => {
        this.products = products;
      });
  }

  public deleteProduct(productId) {
    this.rest.deleteProduct(productId)
    .then((products : Product) => {
      this.getProducts();
    });
  } 

}
