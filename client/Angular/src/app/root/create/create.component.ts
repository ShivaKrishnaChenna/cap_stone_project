import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { Product } from 'src/app/models/product';
import { RestApiService } from 'src/app/rest-api.service';
import { User } from 'src/app/models/user';
//import { exit } from 'node:process';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public product : Product;
  form: FormGroup;
  imageData: string;
  public user : User;

  constructor(
    private router: Router,
    private rest: RestApiService,
    private globalService: GlobalDataManager) { }

  ngOnInit(): void {
    this.user = this.globalService.user;

    if(this.user == null) {
      this.router.navigate(['user-login']);
    }

    this.form = new FormGroup({
      name: new FormControl(null),
      description : new FormControl(null),
      price: new FormControl(null),
      image: new FormControl(null),
      fullname : new FormControl(null),
      address : new FormControl(null),
      state : new FormControl(null),
      phonenumber : new FormControl(null)
    });
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  validation() {
    if (this.form.value.name == null) {
        this.globalService.error("Please enter the name.");
        return false;
    }
    else if (this.form.value.price == null) {
      this.globalService.error("Please enter the price range of product.");
      return false;
    }
    else if (this.form.value.image == null) {
      this.globalService.error("Please upload an image.");
      return false;
    }
    else if (this.form.value.fullname == null &&
      this.form.value.phonenumber == null&&
      this.form.value.address == null &&
      this.form.value.state == null ) {
      this.globalService.error("Please enter complete destination address.");
      return false;
    }
    
    else
      return true;
    }

  public onSubmit(): void{
    if(this.validation()) {
    this.rest.createProduct(this.form.value.name,this.form.value.description,
      this.form.value.price, this.form.value.image, this.form.value.fullname,
      this.form.value.address, this.form.value.state, this.form.value.phonenumber,
      this.user._id.toString());
      this.form.reset();
      this.imageData = null;
      this.router.navigate(['']);
  }
  }
}
