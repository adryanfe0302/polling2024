import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck, OnInit {
  title = 'my-app-v3';
  isLogin: boolean= false;

  ngOnInit(){
    const token = sessionStorage.getItem('key');
    if(token){
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  }

  ngDoCheck(){
    // const token = sessionStorage.getItem('key');
    // if(token){
    //   this.isLogin = true
    // } else {
    //   this.isLogin = false
    // }
  }
}
