import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  addUser(user: any) {

    if (user.value.email == user.value.email_validation) {
      this.service.addUser(user.value).subscribe(() => {
        console.log("Succès");
      })  
    } else {
      console.log("l'email de validation est différent");
    }
    
  }


}
