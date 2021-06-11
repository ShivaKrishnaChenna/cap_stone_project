import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { User } from 'src/app/models/user';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public newUser: User;

  constructor(private router: Router,  private route: ActivatedRoute,
    private service : RestApiService, private globalService : GlobalDataManager ) { }

  ngOnInit(): void {
    this.newUser = new User();
  }

  validation() {
    if (this.newUser.email == null ) {
        this.globalService.error("Please enter the email.");
        return false;
    } else if (this.newUser.name == null) {
      this.globalService.error("Please enter the name.");
      return false;
    }
    else if (this.newUser.password == null) {
      this.globalService.error("Please enter the password.");
      return false;
    }
      return true;
  }

  public createUser(newUser: User): void{
    if(this.validation()) {
    this.service.createUser(newUser).then(
        response => {
          this.router.navigate(['user-login']);
        }
      );
    }
  }
}
