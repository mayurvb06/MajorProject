import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-agentorders',
  templateUrl: './agentorders.component.html',
  styleUrls: ['./agentorders.component.css']
})
export class AgentordersComponent implements OnInit {

  constructor(private http:AuthService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  id:any;
  orderData:any;
  orders:any=[];
  getOrders(){
    this.id={
      userid:localStorage.getItem("userId")
    }
    console.log(this.id);
    // { "orderid":"628364591eb7c845b5b07093"}
    this.http.getOrdersByagent(this.id).subscribe(res=>{
      console.log(res);
      this.orderData=res;
      this.orders=this.orderData.agentorderdata;
    })
  }
  inProgress:any;
  status:any;
  getVal(oId:any){
    console.log(oId);
    this.inProgress={
      orderid:oId
    }
    this.http.orderInProgress(this.inProgress).subscribe(res=>{
      console.log(res);
      this.status=res;
      if(this.status.message=='Order status updated(In progress) successfull'){
        alert("Status is updated to In progress");
      }
    }) 
  }
  complete:any;
  getVal2(oId:any){
    console.log(oId);
    this.complete={
      orderid:oId
    }
    this.http.orderComplete(this.complete).subscribe(res=>{
      console.log(res);
      this.status=res;
      if(this.status.message=='Order status updated(Completed) successfull'){
        alert("Status is updated to Completed");
      }
    }) 
  }


}

