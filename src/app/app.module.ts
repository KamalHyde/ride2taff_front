import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultsComponent } from './results/results.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandsReceivedComponent } from './demands-received/demands-received.component';
import { AddRegularRideComponent } from './add-regular-ride/add-regular-ride.component';
import { PassengerDemandsComponent } from './passenger-demands/passenger-demands.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ResultsComponent,
    AddRideComponent,
    DemandsReceivedComponent,
    AddRegularRideComponent,
    PassengerDemandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
