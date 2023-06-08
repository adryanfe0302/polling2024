import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service'
import { API_URL, getToken } from '../config/api-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent{

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80', 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80', 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80']

  email: string= ''
  password: string= ''
  registername: string= ''
  registeremail: string= ''
  registerpassword: string= ''
  loginactive:boolean = true
  labelLogin:string = 'Register'
  usercreated:boolean = false
  isValidation:boolean = false
  validationtitle:string = ''

  constructor(private router: Router, private loginService: ApiService) { }

  async login(){
    /// get using axios
    this.loginService.login(this.email, this.password)
    .then(res => {
      if(res.status === 200){
        sessionStorage.setItem('key', res.data.accessToken);
        // this.router.navigate(['/dashboard']);
        this.isValidation = false
        window.location.href = '/dashboard'
      }
    })
    .catch(error => {
      // Handle the error
      if(error.response.status === 400 || 401){
        this.isValidation = true
        this.validationtitle = error?.response?.data?.message
      }
    });
  }

  /// public
  async register(){
    const data = {
      password: this.registerpassword,
      email: this.registeremail,
      username: this.registername
    }
    await axios.post(API_URL + '/api/users/register', data)
    .then(res => {
      if(res.status === 201){
        this.usercreated = true
        this.loginactive = true
      }
    })
    .catch(error => {
      console.error(error);
      // Handle the error
    });
  }

  async switchToRegister(){
    // this.router.navigate(['/']);
    this.loginactive = this.loginactive === true ? false : true
    this.labelLogin = this.loginactive === true ? "Register" : "Login"

  }


}


