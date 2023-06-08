import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class DesignateService {

  constructor(private http:HttpClient) { }
  createPresidentAndVicePresident(data:any){
    return this.http.post(API_URL + '/api/elections/votes', data)
  }

}
