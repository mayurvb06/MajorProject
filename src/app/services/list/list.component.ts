import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.data=localStorage.getItem("service");
    this.getAgents();
  }
data:any;
allAgents:any;
agents:any={};
serviceAgents:any=[];
getAgents(){
  this.http.getAllAgents().subscribe(res=>{
    console.log(res);
    this.agents=res;
    this.allAgents=this.agents.agentdata;
    console.log(this.allAgents);
    if (this.data=='Carpenters') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='Carpenter' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='House Cleaning') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='House Cleaning' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='AC Servicing') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='AC servicing' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='Plumbing') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='Plumber' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='Painting') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='Painter' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='Electrician') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='Electrician' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='TV Servicing') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='TV servicing' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }if (this.data=='Water Purifier Servicing') {
      for (let i = 0; i < this.allAgents.length; i++) {
        if(this.allAgents[i].service=='Water Purifier servicing' && this.allAgents[i].status=='Active')
        this.serviceAgents.push(this.allAgents[i]);
      }
    }
    

  })
}

getVal(id:any){
  console.log(id);
  localStorage.setItem("agentId",id);
this.route.navigate(['Services/description']);
}
}
