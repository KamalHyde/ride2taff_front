import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: any;
  // Regex pour email
  emailRegex!: RegExp;

  id: any;
  

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getInformationUser(Number(localStorage.getItem("ID")
    ));

    this.id = localStorage.getItem('ID');

    this.emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    // intitialisation de sign upForm
    
  }

  getInformationUser(id: any) {
    return this.service.getInformationUser(id).subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }

  editUser(editForm: any){
    this.service.editUser(editForm.value).subscribe();
    console.log(editForm.value);

  }

}
