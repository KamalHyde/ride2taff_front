import { Component, OnInit } from '@angular/core';
import { RidesService } from '../services/rides.service';

@Component({
  selector: 'app-delete-rides',
  templateUrl: './delete-rides.component.html',
  styleUrls: ['./delete-rides.component.css']
})
export class DeleteRidesComponent implements OnInit {
  rides : any;

  constructor(private ridesService: RidesService) { }

  ngOnInit(): void {
    this.getAllRides();
  }

   getAllRides(){
     this.ridesService.getAllRides().subscribe(data =>{
       this.rides =data;
     })
   }
   deleteRides(id:any){
     this.ridesService.deleteRidesByAdmin(id).subscribe(()=>{
      this.getAllRides;
      
     })
     location.reload();
   }
}
