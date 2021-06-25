import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { User } from 'src/app/models/user';
import { RestApiService } from './../../rest-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  public users: User[];
  public user: User;
  email = '';
  password = '';

  constructor(
    private router: Router,
    private rest: RestApiService,
    private globalService: GlobalDataManager
  ) {}

  ngOnInit(): void {
    this.rest.getUsers().then((users: User[]) => {
      this.users = users;
    });
  }

  public getUser(userId) {
    this.rest.getSingleUser(userId).then((user: User) => {
      this.globalService.setUser(user);
      this.user = user;
      this.router.navigate(['/']);
    });
  }

  public login() {
    if(this.validation()) {
    this.users.forEach((x) => {
      if (x.email == this.email && x.password == this.password) {
        this.getUser(x._id);
      }
    });
    }
  }

  validation() {
    if (this.email == '') {
      this.globalService.error("Please enter email.");
      return false;
  }
  else if (this.password == '') {
    this.globalService.error("Please enter password.");
    return false;
  }
    else
      return true;
  }
}
