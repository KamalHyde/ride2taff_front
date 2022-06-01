import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AddRegularRideComponent } from './add-regular-ride/add-regular-ride.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { DemandsReceivedComponent } from './demands-received/demands-received.component';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PassengerDemandsComponent } from './passenger-demands/passenger-demands.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignUpComponent},
  { path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path:'addride', component: AddRideComponent, canActivate: [AuthGuard] },
  { path:'demands-received', component: DemandsReceivedComponent, canActivate: [AuthGuard] },
  { path:'delete-users', component: DeleteUsersComponent, canActivate: [AuthGuard] },
  { path:'addregularride', component: AddRegularRideComponent, canActivate: [AuthGuard] },
  { path:'passenger-demands', component: PassengerDemandsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
