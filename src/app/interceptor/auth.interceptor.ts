import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add header with basic auth credentials if user is logged in and request is to the api url
      const headers = new HttpHeaders()
      .append('Authorization', `Bearer ${this.authService.getToken()}`);
    const modifiedReq = request.clone({ headers });
    return next.handle(modifiedReq);
  }
}
