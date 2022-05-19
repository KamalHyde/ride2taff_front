import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRideComponent } from './add-ride/add-ride.component';
import { DemandsReceivedComponent } from './demands-received/demands-received.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PassengerDemandsComponent } from './passenger-demands/passenger-demands.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultsComponent } from './results/results.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path:'login', component: LoginComponent },
  { path:'results', component: ResultsComponent },
  { path:'signup', component: SignUpComponent},
  { path:'profile', component: ProfileComponent },
  { path:'addride', component: AddRideComponent },
  { path:'demands-received', component: DemandsReceivedComponent },
  { path:'passenger-demands', component: PassengerDemandsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
