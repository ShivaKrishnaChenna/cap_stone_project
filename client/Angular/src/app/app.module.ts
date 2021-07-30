import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './root/user-login/user-login.component';
import { UserRegisterComponent } from './root/user-register/user-register.component';
import { RestApiService } from './rest-api.service';
import { GlobalDataManager } from './global-data-manager.service';
import { CreateComponent } from './root/create/create.component';
import { MessageComponent } from './root/message/message.component';
import { TrackingDetailsComponent } from './root/tracking-details/tracking-details.component';
import { ShipmentDetailsComponent } from './root/shipment-details-component/shipment-details.component';
import { UserProfileComponent } from './root/user-profile/user-profile.component';
import { ServicesComponent } from './root/services/services.component';
import { ContactComponent } from './root/contact/contact.component';
import { PaymentComponent } from './root/payment/payment.component';
import { ClaimsComponent } from './claims/claims.component';
import { CareersComponent } from './root/careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CreateComponent,
    MessageComponent,
    TrackingDetailsComponent,
    ShipmentDetailsComponent,
    UserProfileComponent,
    ServicesComponent,
    ContactComponent,
    PaymentComponent,
    ClaimsComponent,
    CareersComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule],
  providers: [RestApiService, GlobalDataManager ],
  bootstrap: [AppComponent],
})
export class AppModule {}
