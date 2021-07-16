import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './root/home-page/home-page.component';
import { UserLoginComponent } from './root/user-login/user-login.component';
import { UserRegisterComponent } from './root/user-register/user-register.component';
import { CreateComponent } from './root/create/create.component';
import { TrackingDetailsComponent } from './root/tracking-details/tracking-details.component';
import { AboutComponent } from './root/about/about.component';
import { ShipmentDetailsComponent } from './root/shipment-details-component/shipment-details.component';
import { UserProfileComponent } from './root/user-profile/user-profile.component';
import { ServicesComponent } from './root/services/services.component';
import { ContactComponent } from './root/contact/contact.component';
import { PaymentComponent } from './root/payment/payment.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create', component: CreateComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'tracking-detials', component: TrackingDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shipment-details/:id', component: ShipmentDetailsComponent },
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'payment/:id', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
