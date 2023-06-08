import { Component, OnInit } from '@angular/core';
import { Ipolling, IqueryCandidate } from './../interface/global'
import { ApiService } from './../service/api.service'


@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.scss']
})
export class PollingComponent implements OnInit {

  dataCandidate:Ipolling[] = []
  isVoted:boolean = true
  // searchValue:string = ''
  searchValue: string = ''
  loading: boolean = false;


  constructor(private apiservice: ApiService){
  }
  ngOnInit(){
    let data: IqueryCandidate = {
      pageno: 1,
      pageoption: 20,
      keyword: ''
    }
    this.getCandidate(data)
  }

  getCandidate(data?:IqueryCandidate){
    this.loading = true
    this.apiservice.getCandidate(data).subscribe(res => {
      this.loading = false
      const tempoData:any = res
      this.dataCandidate = tempoData.listCandidate.map((obj:any, index:string) => {
        return {
          label: obj.president.name + ' & ' + obj.vicePresident.name,
          votes: obj.votes,
          presidentimage: obj.president.images,
          vicepresidentimage: obj.vicePresident.images,
          id: obj._id
        }
      })
    })
  }

  deleteCandidate(id:string){
    console.log('id', id);
    this.apiservice.deleteCandidate(id).subscribe(res =>{
      this.getCandidate()
    })
  }

  postVotes(id:string){
    this.apiservice.postVotes(id).subscribe(res =>{
      this.getCandidate()
      this.isVoted = false
    })
  }



  searchCandidate():void{
    let data: IqueryCandidate = {
      pageno: 1,
      pageoption: 20,
      keyword: this.searchValue || ''
    }
    this.getCandidate(data)
  }

  searchCandidateChange():void{
    let data: IqueryCandidate = {
      pageno: 1,
      pageoption: 20,
      keyword: this.searchValue || ''
    }
    if(this.searchValue.length > 2 ){
      this.getCandidate(data)
    } else if(this.searchValue.length === 0) {
      this.getCandidate(data)
    }
  }


}
