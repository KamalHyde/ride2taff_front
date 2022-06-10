import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.css']
})
export class InformationUserComponent implements OnInit {
  user: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getInformationUser(Number(localStorage.getItem("ID")));
  }

  getInformationUser(id: any) {
    return this.service.getInformationUser(id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }

}
