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
  user_id: any;
  constructor(private userService: UserService, private rideService : RidesService, private router : Router) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem("ID");
  }

    searchRide(formSearchRide: any){
      let searchRide = formSearchRide.value;
      this.rideService.searchByZipDate(searchRide).subscribe(data =>{
        this.ride = data;
        console.log(data);
      })
      
    }

  sendARequest(user_id: any, ride_id: any) {
    this.userService.sendARequest(user_id, ride_id).subscribe(data =>{
      alert('Votre demande a été envoyée');
    });
  }

  isConnect() {
    if(localStorage.getItem('isLogged') == 'true') {
      return true;
    }
    return false;
  }
    
  }
