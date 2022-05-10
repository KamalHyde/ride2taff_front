import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  emailRegex!: RegExp;
  constructor(private service: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required], [Validators.pattern(this.emailRegex)]],
      password: [null, [Validators.required]]
    })
  }

  onLogin() {
    console.log("Succès");
  }

}
