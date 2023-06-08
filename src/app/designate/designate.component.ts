import { Component, OnInit } from '@angular/core';
import { CandidateService } from './../candidate/service/candidate.service'
import { Iperson, IpostCandidate } from './../interface/global'
import { DesignateService } from './service/designate.service'
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designate',
  templateUrl: './designate.component.html',
  styleUrls: ['./designate.component.scss']
})
export class DesignateComponent implements OnInit{
  isCandidateSelected: boolean = false
  candidateOptionsMaster:Iperson[] = []
  candidateOptions:Iperson[] = []
  selectedPresident:any = ''
  selectedVicePresident:any = ''
  constructor(
    private listCandidate:CandidateService,
    private servicePresidentCreation:DesignateService,
    private router:Router,
    public dialog: MatDialog
    ){}

  checkCreationButton():void{
    if(this.selectedPresident && this.selectedVicePresident){
      this.isCandidateSelected = false
    } else {
      this.isCandidateSelected = true
    }
  }

  validationCandidateOptions(id:string):void{
    this.candidateOptions = this.candidateOptionsMaster.filter(item => item._id !== id)
  }

  ngOnInit(){
    this.listCandidate.getListCandidate().subscribe((res:any) => {
      this.candidateOptions = res
      this.candidateOptionsMaster = res
    })
  }

  selected(candidate:Iperson):void{
    this.selectedPresident = candidate
    this.validationCandidateOptions(candidate._id)
    this.checkCreationButton()
  }

  selectedVP(candidate:Iperson):void{
    this.selectedVicePresident = candidate
    this.validationCandidateOptions(candidate._id)
    this.checkCreationButton()
  }

  createCandidate(){
    let data:IpostCandidate = {
      president: this.selectedPresident._id,
      vicePresident: this.selectedVicePresident._id,
      comments: [""],
      votes: 50
    }
    this.servicePresidentCreation.createPresidentAndVicePresident(data).subscribe(res => {
      this.openDialog()
    })

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px', // Set the desired width of the modal
    });
  }

}
