import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-demands-received',
  templateUrl: './demands-received.component.html',
  styleUrls: ['./demands-received.component.css']
})
export class DemandsReceivedComponent implements OnInit {

  id: any;
  rides!: any;
  demands!: any;

  constructor(private authService: AuthService, private service: UserService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem("ID");
    this.getAllRidesByDriver(this.id);
    console.log(this.id);

  }

  getAllRidesByDriver(id: any) {
    return this.service.getAllRidesByDriver(id).subscribe(data => {
      this.rides = data;
      console.log(this.rides);
    })
  }

  openReceivedDemands(id: any) {
    return this.service.openReceivedDemands(id).subscribe(data => {
     this.demands = data;
     console.log(this.demands);  
    })
  }

  deleteRideDriver(id: any) {
    return this.service.deleteRideDriver(id).subscribe(() => {
      this.getAllRidesByDriver(this.id);
    });
  }

  acceptDemand(user_id: any, ride_id: any) {
    return this.service.acceptDemand(user_id, ride_id).subscribe(() => {
      console.log("bravo");
    });
      
  }

  declineDemand(user_id: any, ride_id: any) {
    return this.service.declineDemand(user_id, ride_id).subscribe(() => {
      console.log("bravo");
    });
  }
}
