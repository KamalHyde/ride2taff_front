import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    return this.http.post("http://localhost:8080/users/newuser", user);
  }

  getAllRidesByDriver(id: any) {
    return this.http.get("http://localhost:8080/rides/ridesbydriver/" + id);
  }

  openReceivedDemands(id: any) {
    return this.http.get("http://localhost:8080/bookedrides/usersbyride/" + id);
  }

  deleteRideDriver(id: any) {
    return this.http.get("http://localhost:8080/rides/delete-ride-admin/" + id);
  }

  acceptDemand(user_id: any, ride_id: any) {
    return this.http.get("http://localhost:8080/bookedride/acceptrequest?user_id=" + user_id + "&ride_id=" + ride_id);
  }

  declineDemand(user_id: any, ride_id: any) {
    return this.http.get("http://localhost:8080/bookedride/declinerequest?user_id=" + user_id + "&ride_id=" + ride_id);
  }

  deleteUser(id:any){
    return this.http.get("http://localhost:8080/users/delete/" + id);
  }
  getAllUser(){
    return this.http.get("http://localhost:8080/users/all")
  }
}
