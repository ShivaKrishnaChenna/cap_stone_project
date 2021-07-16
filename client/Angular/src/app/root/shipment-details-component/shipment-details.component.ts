import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {
  
  id : string;
  product : Product;
  dataList: Array<any> = [];

  constructor(private route: ActivatedRoute,
    private rest: RestApiService,
    private router: Router,
    public globalService: GlobalDataManager) { 
      this.dataList = [
        { code: "processing", name: "Processing" },
        { code: "packed", name: "Packed" },
        { code: "shipped", name: "Shipped" },
        { code: "delivered", name: "Delivered" }
      ]
    }

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

  public updateTracking(value) {
    this.product.status = value;
  }

  public submitTracking(){
    this.rest.updateProduct(this.product).subscribe(x => {
      this.router.navigate(['tracking-detials']);
    });
  }

}
