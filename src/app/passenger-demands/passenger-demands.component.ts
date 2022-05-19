import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-passenger-demands',
  templateUrl: './passenger-demands.component.html',
  styleUrls: ['./passenger-demands.component.css']
})
export class PassengerDemandsComponent implements OnInit {

  demands!: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getPassengerDemands(9);
  }

  getPassengerDemands(id: any) {
    return this.service.openPassengerDemands(id).subscribe(data => {
     this.demands = data;
     console.log(this.demands);  
    })
  }

  cancelRequest(id:any){
    return this.service.cancelRequest(id).subscribe(() =>{
      console.log("demande supprimée");
      window.location.reload();
    })
  }

}
