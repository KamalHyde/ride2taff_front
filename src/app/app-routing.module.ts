import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRideComponent } from './add-ride/add-ride.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { DemandsReceivedComponent } from './demands-received/demands-received.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
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
  { path:'delete-users', component: DeleteUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
