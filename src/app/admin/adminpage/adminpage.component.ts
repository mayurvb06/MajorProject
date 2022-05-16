import { Component, OnInit } from '@angular/core';
// import { count } from 'console';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css'],
})
export class AdminpageComponent implements OnInit {
  constructor(private http: AuthService) {}

  ngOnInit(): void {
    this.getOrders();
    this.getAgents();
    this.getUsers();
  }

  orders: any = [];
  ordersData: any = [];
  agents: any = [];
  agentsData: any = [];
  users: any = [];
  usersData: any = [];
  totalOrders:any;
  totalUsers:any;
  getOrders() {
    this.http.getAllOrders().subscribe((res) => {
      console.log(res);
      this.orders = res;
      this.ordersData = this.orders.orderdata;
      console.log(this.ordersData);
      this.totalOrders=this.ordersData.length;
      console.log(this.totalOrders);
    });
  }
  agentLength: any;
  getAgents() {
    this.http.getAllAgents().subscribe((res) => {
      console.log(res);
      this.agents = res;
      this.agentsData = this.agents.agentdata;
      // this.agentLength = this.agentsData.length;
      console.log(this.agentLength);
      let count = 0;
      for (let i = 0; i < this.agentsData.length; i++) {
        if (this.agentsData[i].status = 'Active') {
          count = count + 1;
        }
      }
      this.agentLength = count;
      console.log('agent length is' + this.agentLength);
    });
  }
onlyUser:any=[];
  getUsers() {
    this.http.getAllUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
      this.usersData = this.users.userdata;
      console.log(this.usersData);
      this.totalUsers=this.usersData.length;
      for(let i=0;i<this.usersData.length;i++){
        if(this.usersData[i].role=='user'){
          this.onlyUser.push(this.usersData[i]);
        }
      }
      console.log(this.onlyUser);
      
    });
  }
}
