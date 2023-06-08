import { Component, OnInit, ViewChild } from '@angular/core';
import { CandidateService } from '../service/candidate.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  uploadFile(){
    const file = this.fileInput.nativeElement.files[0];
  }
  name:string = ''
  status:string = ''
  images:string = ''

  constructor(private serviceCandidate:CandidateService, private router:Router){}
  ngOnInit(){}

  saveCandidate(){

    let data:any = {
      name: this.name,
      status: this.status,
      images: this.images || 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Sandiaga_Uno%2C_Menteri_Pariwisata_dan_Ekonomi_Kreatif.png'
    }
    this.serviceCandidate.createCandidate(data).subscribe(res => {
      this.router.navigate(['/candidate']);
    })
  }
}
