import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isConnect() {
    if(localStorage.getItem('isLogged') == 'true') {
      return true;
    }
    return false;
  }

  onLogout() {
    localStorage.clear();
    this.router.navigateByUrl("/")
  }
}
