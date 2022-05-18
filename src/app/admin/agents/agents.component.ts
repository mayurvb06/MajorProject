import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements OnInit {
  ngOnInit(): void {

    this.getAgents()
  }
  agents: any;
  agentsData: any;
  pendingAgents: any = [];
  constructor(private http: AuthService) {}
  getAgents() {
    this.http.getAllAgents().subscribe((res) => {
      console.log(res);
      this.agents = res;
      this.agentsData = this.agents.agentdata;
      let count = 0;
      for (let i = 0; i < this.agentsData.length; i++) {
        if (this.agentsData[i].status == 'Pending') {
          this.pendingAgents.push(this.agentsData[i]);
        }
      }
      console.log("Pending agents data is");
      console.log(this.pendingAgents);
      
      
    });
  }
  data:any;
  res1:any;
  getApprove(uid:any,aid:any){
    this.data={
      id:aid,
    userid:uid
    }
    console.log(this.data);
    this.http.approveAgent(this.data).subscribe(res=>{
      console.log(res);
      this.res1=res;
      if(this.res1=='Agent approved successfully'){
        alert("Agent has been approved successfully");
      }
    })
  }
orderReject:any={
  id:""
}
response:any;
  reject(val:any){
    console.log(val);
   this.orderReject={
     id:val
   }
   this.http.rejectAgent(this.orderReject).subscribe(res=>{
    console.log(res);
    this.response=res;
    if(this.response.message=='Agent rejected successfully')
    alert("Agent has been rejected successfully");
  }) 
  }
}
