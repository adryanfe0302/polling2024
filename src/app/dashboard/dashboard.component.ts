import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
import { Router } from '@angular/router';
import { IglobalDataInput, IlistCandidate } from './../interface/global'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  chartReady:boolean = false
  dataCandidate:IlistCandidate[] = []
  sampleDataFromParentToChild:IglobalDataInput[] = []
  loading:boolean = false
  constructor(private candidateService: ApiService, private router: Router){
  }


  ngOnInit(){
    this.loading = true
    this.candidateService.getCandidate().subscribe(res => {
      const tempoData:any = res
      this.dataCandidate = tempoData.listCandidate.map((obj:any, index:string) => {
        return {
          label: obj.president.name + ' & ' + obj.vicePresident.name,
          y: obj.votes
        }
      })
      this.chartReady = true
      this.loading = false
    })

    this.sampleDataFromParentToChild = [
      {no: 1, name: 'demokrat'},
      {no: 4, name: 'nadem'},
      {no: 5, name: 'pni'},
      {no: 12, name: 'hanura'}
    ]
  }
}
