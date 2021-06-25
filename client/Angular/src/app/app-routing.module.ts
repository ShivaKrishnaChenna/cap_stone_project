import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './root/home-page/home-page.component';
import { UserLoginComponent } from './root/user-login/user-login.component';
import { UserRegisterComponent } from './root/user-register/user-register.component';
import { CreateComponent } from './root/create/create.component';
import { TrackingDetailsComponent } from './root/tracking-details/tracking-details.component';
import { AboutComponent } from './root/about/about.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: CreateComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'tracking-detials', component: TrackingDetailsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
