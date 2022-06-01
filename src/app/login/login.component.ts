import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
    
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user_id: any;
  loginForm!: FormGroup;
  emailRegex!: RegExp;
  
  constructor(private service: UserService, private formBuilder: FormBuilder,
              private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/;
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required], [Validators.pattern(this.emailRegex)]],
      password: [null, [Validators.required]]
    })
  }

  onLogin() {
    
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((data: any) =>{
      this.user_id = data;
      localStorage.setItem("ID", this.user_id);
      this.router.navigateByUrl('/demands-received');
      localStorage.setItem("isLogged", "true");
    });
    
  }
  
}