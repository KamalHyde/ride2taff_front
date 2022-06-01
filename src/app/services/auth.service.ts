import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: any;

  constructor(private http: HttpClient) { }
  
  login(loginForm: any) {
    this.token = this.http.post("http://localhost:8080/users/login", loginForm);
    return this.token;
  }

  getToken(): any {
    console.log(this.token);
    return this.token;
  }
}
