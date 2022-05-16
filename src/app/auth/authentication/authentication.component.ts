import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "./../../auth.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton!.addEventListener('click', () => {
      container!.classList.add("right-panel-active");
    });
    
    signInButton!.addEventListener('click', () => {
      container!.classList.remove("right-panel-active");
    });
  }

userData:any={};
token="";
role="";
loginRes:any={};
errcode:any;
  login(data:any):void{
    console.log(data);
    this.userData=data;
    this.auth.userLogin(this.userData).subscribe((res)=>{
      console.log(res);
      this.loginRes=res;
    console.log(this.loginRes);
    this.token=this.loginRes.token;
    this.role=this.loginRes.userdata.role;
    console.log(this.token);
    console.log(this.role);
    localStorage.setItem("token",this.token);
    localStorage.setItem("role",this.role);
    if (this.token) {
      this.auth.auth()
      console.log("Hiii welcome to login");
    this.router.navigate(["/home/Homepage"]);
    }
    },(error=>{
      this.errcode=error.status;
      console.log(this.errcode);
      
      console.log("error is");
      console.log(error);
      console.log(error.status);
      if (error.status!=200) {
      //  alert(error.status);
       this.errcode=error.status;
    }
    }));
    
    
  }
  signupData:any={}
  Signup(data:any){
    this.signupData=data;
    console.log(this.signupData);
    this.auth.userSignup(this.signupData).subscribe(res=>{
      console.log(res);
      
    })
    
  }

}

