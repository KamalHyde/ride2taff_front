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

  editUser(user: any) {
    return this.http.get("http://localhost:8080/users/edit?id=" + user.id + "&first_name=" + user.first_name +"&last_name=" + user.last_name + "&email=" + user.email);
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
    return this.http.get("http://localhost:8080/users/all");
  }


  openPassengerDemands(id: any) {
    return this.http.get("http://localhost:8080/bookedride/ridesbyuser/"+ id);
  }

  cancelRequest(id: any){
    return this.http.delete("http://localhost:8080/bookedride/deleterequest?ride_id=" + id);

  }


  getInformationUser(id:any){
    return this.http.get("http://localhost:8080/users/get/" + id);
  }

  sendARequest(user_id: any, ride_id: any) {
    return this.http.get("http://localhost:8080/bookedride/sendrequest?user_id=" + user_id + "&ride_id=" + ride_id);

  }

  validate(id: any) {
    return this.http.get("http://localhost:8080/users/validate/" + id);
  }
}
