// Angular Imports
import { Injectable, OnDestroy } from '@angular/core';

// Other Imports
import * as cloneDeep from 'lodash/cloneDeep';
import { User } from './models/user';
import { NavigationStart, Router } from "@angular/router";
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataManager implements OnDestroy {

    public message = "";
    public messageType = "danger";

    public productsSelected: Product[] = [];
    public isDataPersisted = false;
    public user: User;
    public showLogin = localStorage.getItem('login') == 'Y' ? false : true;
    public isAdmin = false;
    
    constructor(private router: Router) {

        this.user = JSON.parse(localStorage.getItem('user'));
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
              this.message = "";
            }
          });
    }

  public ngOnDestroy(): void {}

    public setUser(user : User) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
        this.showLogin = false;
        this.isAdmin = this.user.isAdmin;
        localStorage.setItem('login', 'Y');
    }

  public getUser(): User {
    return this.user;
  }

  public resetUser() {
    localStorage.setItem('login', 'N');
    localStorage.setItem('user', null);
    this.user = null;
    this.showLogin = true;
    this.isAdmin = false;
  }

  error(message) {
    this.messageType = "danger";
    this.message = message;
  }

  success(message) {
    this.messageType = "success";
    this.message = message;
  }

  warning(message) {
    this.messageType = "warning";
    this.message = message;
  }

  public appendProblem(product: Product) {
      this.isDataPersisted = true;
      if (product ) {
        product.isSelected = true;
      this.productsSelected.push(product);
      }
  }

  public removeProduct(product : Product) {
    if (product ) {
      this.productsSelected.forEach((x,i) => {
        if(x._id == product._id) {
          this.productsSelected.splice(i);
        } 
      })
    }
  }

  //   public appendProblems(problems: MemberProblem[], reset = true) {
  //     if (problems) {
  //       if (reset) {
  //         this.resetProblems();
  //       }
  //       problems.forEach(problem => {
  //         this.problemList.push(problem);
  //         this.isDataPersisted = true;
  //       })
  //     }
  //   }

  public getProblemList(reset = false): Product[] {
    debugger;
      const result = cloneDeep(this.productsSelected);
      if (reset) {
      this.resetProblems();
      }
      return result;
  }

  public resetProblems() {
    debugger;
      this.isDataPersisted = false;
      this.productsSelected = [];
  }
}
