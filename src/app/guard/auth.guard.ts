import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  const token = localStorage.getItem("ID");
  if (token != null) {
    return true;
  } else {
    this.router.navigateByUrl('/login');
    return false;
  }
}
  
}
