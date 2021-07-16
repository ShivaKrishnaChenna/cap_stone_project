import { Component, OnInit } from '@angular/core';
import { GlobalDataManager } from 'src/app/global-data-manager.service';
import { User } from 'src/app/models/user';
import { RestApiService } from 'src/app/rest-api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : User;
  showSaveBtn: boolean;
  imageData: string;
  imageFile: File;

  constructor(
    public globalService: GlobalDataManager,
    public restApiService: RestApiService,
  ) {}

  ngOnInit(): void {
    this.user = this.globalService.getUser();
    this.user.imagePath = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
  }

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.imageFile = file;
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
      this.user.imagePath = file.name;
    }
  }


  saveImageFlag(save) {
    this.showSaveBtn = !this.showSaveBtn;
    this.user.image = this.imageFile;
    if(save) {
      this.restApiService.updateUser(this.user).then(
        response => {
          this.getUser(this.user._id);
        }
      );
    }
    this.imageData = null;
  }

  public getUser(userId) {
    this.restApiService.getSingleUser(userId).then((user: User) => {
      this.globalService.setUser(user);
      this.user = user;
    });
  }


}
