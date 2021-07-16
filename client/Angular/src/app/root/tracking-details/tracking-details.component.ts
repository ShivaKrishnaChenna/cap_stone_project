import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-tracking-details',
  templateUrl: './tracking-details.component.html',
  styleUrls: ['./tracking-details.component.css']
})
export class TrackingDetailsComponent implements OnInit {

  public products : Product[];
  public user : User;
  public displayMode = "View";

  constructor(
    private router: Router,
    private rest: RestApiService,
    public globalService: GlobalDataManager) { }

  ngOnInit(): void {
    this.user = this.globalService.user;
    if(this.globalService.isAdmin) {
      this.displayMode = "Edit";
      this.getALLProducts();
    } else {
    this.getProducts(this.user._id);
    }
  }

  public getProducts(userid) {
    this.rest.getProductsByUserid(userid)
      .then((products : Product[] ) => {
        this.products = products;
      });
  }

  public getALLProducts() {
    this.rest.getProducts()
      .then((products : Product[] ) => {
        this.products = products;
      });
  }

  public deleteProduct(productId) {
    this.rest.deleteProduct(productId)
    .then((products : Product) => {
      this.getProducts(this.user._id);
    });
  } 

  public viewProductDetails(productId) {
    this.router.navigate(['shipment-details/' + productId]);
  }

}
