import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  constructor(private http: HttpClient) { }



  searchByZipDate(searchRide: any){

    return this.http.post("http://localhost:8080/rides/searchride", searchRide);

  }

  newRegularRide(newRegularRide: any) {
    return this.http.post("http://localhost:8080/rides/newregularride", newRegularRide)
  }

  getAllRides(){
    return this.http.get("http://localhost:8080/rides/allRides");
  }
  deleteRidesByAdmin(id:any){
    return this.http.get("http://localhost:8080/rides/delete/" + id);
  }
  
}
