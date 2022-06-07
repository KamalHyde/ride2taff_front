import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRegularRideComponent } from './add-regular-ride/add-regular-ride.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { DeleteRidesComponent } from './delete-rides/delete-rides.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { DemandsReceivedComponent } from './demands-received/demands-received.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { InformationUserComponent } from './information-user/information-user.component';
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
  { path:'delete-users', component: DeleteUsersComponent, canActivate: [AdminGuard] },
  { path:'delete-rides', component: DeleteRidesComponent, canActivate: [AdminGuard] },
  { path:'addregularride', component: AddRegularRideComponent, canActivate: [AuthGuard] },
  { path:'passenger-demands', component: PassengerDemandsComponent, canActivate: [AuthGuard] },
  { path:'information-user', component: InformationUserComponent},
  { path:'edit-user', component: EditUserComponent},
  { path:'delete-rides', component: DeleteRidesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
