import { Component, OnInit } from '@angular/core';
import { CandidateService } from './service/candidate.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit{
  constructor(private serviceCandidate: CandidateService, private router:Router){}
  displayedColumns: string[] = ['position', 'name', 'status', 'images', 'id', 'action'];
  dataSource:any = [];
  loading:boolean = false
  ngOnInit(){
   this.getListAplicant()
  }

  getListAplicant(){
    this.loading = true
    this.serviceCandidate.getListCandidate().subscribe(res => {
      this.loading = false
      this.dataSource = res
    })
  }

  goToCreatePage(){
    this.router.navigate(['/candidate/create']);
  }

  delete(id:string){
    this.serviceCandidate.deleteCandidate(id).subscribe(res => {
      this.getListAplicant()
    })
  }
}
