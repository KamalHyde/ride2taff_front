import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddRideService } from 'src/app/rideServices/add-ride.service'

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {

  ride!: FormGroup;

  constructor(private addRideService : AddRideService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ride = this.formBuilder.group({
      departure_zip_code: [null, [Validators.required]],
      departure_city: [null, [Validators.required]],
      arrival_zip_code: [null, [Validators.required]],
      arrival_city: [null, [Validators.required]],
      number_seats: [null, [Validators.required]],
      departure_date: [null, [Validators.required]],
      departure_time: [null, [Validators.required]],
      user_id: [Number(localStorage.getItem("ID"))]
    })
  }

  //méthode pour enregistrer une course
  save_ride(){
    let data = this.ride.value;
    console.log(data);
    this.addRideService.addNewRide(data).subscribe(() => {
      console.log('saved success');
    })
  }


}
