import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class ApiInterceptors implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('key')
    const reqWithAuth = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(reqWithAuth)
    .pipe(
      catchError(error =>{
        if(error.status === 401){
          // session expired
          sessionStorage.removeItem('key')
          window.location.href = '/'
        } else if(error.status === 404){
          // for wrong path url
          console.log('wrong url path');
        } else if(error.status === 400){
          // validation err, id not found
          console.log('id not found');
        }
        throw error
      })
    )
  }
}
