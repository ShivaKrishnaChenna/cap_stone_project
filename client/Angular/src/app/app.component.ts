import { Component , OnInit} from '@angular/core';
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularEcommerce';
  user: User;

  constructor(
    public globalService: GlobalDataManager
  ) {}

  ngOnInit(): void {
    this.user = this.globalService.getUser();
  }

}
