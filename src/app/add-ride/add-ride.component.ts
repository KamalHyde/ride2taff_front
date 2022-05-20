import { Component, OnInit } from '@angular/core';
import { AddRideService } from 'src/app/rideServices/add-ride.service'

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {

  constructor(private addRideService : AddRideService) { }

  ngOnInit(): void {
  }

  //méthode pour enregistrer une course
  save_ride(ride: any){
    let data = ride.value;
    console.log(data);
    this.addRideService.addNewRide(data).subscribe(() => {
      console.log('saved success')
    })
  }


}
