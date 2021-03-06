import { HttpClientModule} from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandsReceivedComponent } from './demands-received/demands-received.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { AddRegularRideComponent } from './add-regular-ride/add-regular-ride.component';
import { PassengerDemandsComponent } from './passenger-demands/passenger-demands.component';

import { InformationUserComponent } from './information-user/information-user.component';

import { httpInterceptorProviders } from './interceptor';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteRidesComponent } from './delete-rides/delete-rides.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AddRideComponent,
    DemandsReceivedComponent,
    DeleteUsersComponent,
    AddRegularRideComponent,
    PassengerDemandsComponent,
    InformationUserComponent,
    EditUserComponent,
    DeleteRidesComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
