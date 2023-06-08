import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http:HttpClient) { }

  getListCandidate(){
    return this.http.get(API_URL + '/api/elections/');
  }

  createCandidate(data:any){
    return this.http.post(API_URL + '/api/elections/', data)
  }

  deleteCandidate(id:string){
    return this.http.delete(API_URL + '/api/elections/deletefromelection/' + id)
  }

}
