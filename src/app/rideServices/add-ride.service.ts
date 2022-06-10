
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRideService {

  constructor(private http:HttpClient) { }

  addNewRide(rideForm : any){
    return this.http.post("http://localhost:8080/rides/newride", rideForm)
  }
}
