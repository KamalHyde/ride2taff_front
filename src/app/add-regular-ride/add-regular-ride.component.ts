import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RidesService } from '../services/rides.service';

@Component({
  selector: 'app-add-regular-ride',
  templateUrl: './add-regular-ride.component.html',
  styleUrls: ['./add-regular-ride.component.css']
})
export class AddRegularRideComponent implements OnInit {

  newRideForm!: FormGroup;
  

  constructor(private service: RidesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.newRideForm = this.formBuilder.group({
      departure_zip_code: [null, [Validators.required]],
      departure_city: [null, [Validators.required]],
      arrival_zip_code: [null, [Validators.required]],
      arrival_city: [null, [Validators.required]],
      number_seats: [null, [Validators.required]],
      departure_time: [null, [Validators.required]],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
      status: [null, [Validators.required]],
      user_id: [Number(localStorage.getItem("ID"))]
    })
  }

  newRegularRide() {
    console.log(this.newRideForm.value);
    this.service.newRegularRide(this.newRideForm.value).subscribe(() => {
      console.log("Succès");
    })
  }

}
