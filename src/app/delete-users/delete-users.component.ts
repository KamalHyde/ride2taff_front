import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {
  users :any;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.getAllUser();

  }

  getAllUser() {
    this.userService.getAllUser().subscribe(data=>{
      this.users =data;
    })
  }

  delete(id:any){
    this.userService.deleteUser(id).subscribe(()=>{
      this.getAllUser();
    });
  }
  

}
