import { Component, OnInit, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { IglobalDataInput } from './../interface/global'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  constructor(private candidateService:DashboardComponent){

  }
  @Input() listOfParty:IglobalDataInput[] = []

  ngOnInit(){
    console.log('listOfParty', this.listOfParty);
  }

  chart: any;
  chartOptions = {
    title:{
      text: "Polling President Candidate 2024",
      fontSize: 40
    },
    animationEnabled: true,
    axisX:{
      labelFontSize: 12
    },
    data: [{
      type: "column",
      dataPoints: this.candidateService.dataCandidate,
    }]
  }











}
