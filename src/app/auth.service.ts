import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {
    // this.token=localStorage.getItem("token");
    // this.role=localStorage.getItem("role");
    // console.log(this.token);
    // console.log(this.role);
    


   }

   Role:any=localStorage.getItem('role');
  //  getToken(){
  //    return this.token;
  //  }
  //  setToken(token:any){
  //   this.token=token;
  //  }
token:any="";
role:any="";


  url:string ="http://localhost:3800";


  userLogin(data:any){
    console.log("Service is called");
    return this.http.post(this.url+"/loginUser",data);
    
  }

  userSignup(data:any){
    console.log("service is called in signup");
    return this.http.post(this.url+"/signUpUser",data);
  }

  auth(){
    this.Role=localStorage.getItem('role');
    console.log("2"+this.Role);
  }
  logOut(){
    this.Role=localStorage.removeItem('role');
    localStorage.removeItem('token')
    // localStorage.removeItem('code')
    this.Role='';
  }

  registerAgent(data:any){
    console.log("In service");
    
    console.log(data);
    
    const formdata: FormData= new FormData();
    formdata.append('file',data.image);
    data.image=formdata;
    // data.email="mayurbhakare";
    console.log(data);
    
    console.log("Calling deal sec3");
    const req=new HttpRequest('POST',this.url+"/agentRegister",data,{
      reportProgress:true,
      responseType:'text'
    });
    // return this.http.post(this.url+"/agentRegister",data);   
    return this.http.request(req);   

  }

  getAllOrders(){
    console.log("calling orders");
    
    return this.http.get(this.url+"/allorders");
  }
  getAllAgents(){
    console.log("calling orders");
    
    return this.http.get(this.url+"/allAgents");
  }
  getAllUsers(){
    console.log("calling orders");
    
    return this.http.get(this.url+"/allUsers");
  }

  getCarpenters(){
    return this.http.get(this.url+"/carpenters");
  }
  getElectrician(){
    return this.http.get(this.url+"/electrician");
  }
  getPainters(){
    return this.http.get(this.url+"/painters");
  }
  getHouseclean(){
    return this.http.get(this.url+"/houseclean");
  }
  getPlumbers(){
    return this.http.get(this.url+"/plumbers");
  }
  getTVrepair(){
    return this.http.get(this.url+"/tvrepair");
  }
  getACrepair(){
    return this.http.get(this.url+"/acrepair");
  }
  getWaterpurifier(){
    return this.http.get(this.url+"/waterpurifier");
  }

}
