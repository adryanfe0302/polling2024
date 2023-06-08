import { AfterViewInit, Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL, getToken } from '../config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService{
  getRole: string = '';
  constructor(private router: Router, private http:HttpClient) {
  }
  async login(email:string, password:string){
    const data = {
      password: password,
      email: email
    }
    return await axios.post(API_URL + '/api/users/login', data)
  }


  profile(): Observable<any> {
    return this.http.get(API_URL + '/api/users/current').pipe(
      tap((res:any) =>{
        // this.getRole = res.role === 'admin' ? true : false
        this.getRole = res.role
      })
    )
  }

  getCandidate(data?:any){
    return this.http.post(API_URL + '/api/elections/candidate', data)
  }


  postVotes(id:string){
    return this.http.put(API_URL + `/api/elections/votes/${id}`, {})
  }

  deleteCandidate(id:string){
    return this.http.delete(API_URL + `/api/elections/deleteselectedcandidate/${id}`, {})
  }

  // getData(): Observable<any> {
  //   const data = [
  //     { id: 1, name: 'John' },
  //     { id: 2, name: 'Jane' },
  //     { id: 3, name: 'Alice' }
  //   ];

  //   return of(data);
  // }

}
