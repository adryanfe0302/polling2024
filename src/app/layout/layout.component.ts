import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  loading:boolean = false
  username:string = '';


  isAuthAdmin:boolean = false

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver, private userProfile:ApiService) { }

  logout():void{
    this.loading = true
    setTimeout(() => {
      sessionStorage.removeItem('key')
      this.loading = false
      // this.router.navigate(['/'])
      window.location.href = '/'
    }, 500)
  }

   ngOnInit(){
    const token = sessionStorage.getItem('key')
    if(!token){
      this.router.navigate(['/'])
    }

    this.userProfile.profile().subscribe(res => {
      this.username = res.username
      this.isAuthAdmin = res.role === 'admin' ? false : true
    }, error => {
      if(error.status === 401){
        // remove token if its expired
        sessionStorage.removeItem('key')
        this.router.navigate(['/']);
      }
    })

  }
}


