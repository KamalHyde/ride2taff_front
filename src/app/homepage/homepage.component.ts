import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RidesService } from '../services/rides.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ride : any;
  constructor(private rideService : RidesService, private router : Router) { }

  ngOnInit(): void {

    }
    searchRide(formSearchRide: any){
      let searchRide = formSearchRide.value;
      this.rideService.searchByZipDate(searchRide).subscribe(data =>{
        this.ride = data;
        console.log(data);
      })
      
    }

    
  }
