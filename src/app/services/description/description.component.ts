import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  constructor(private http: AuthService) {}

  ngOnInit(): void {
    this.getDescription();
    this.token=localStorage.getItem("token");
  }
token:any;
  servicesData: any = [];
  serviceWithPrice: any = {
    service: String,
    price: Number,
  };
  service:any={
    service:""
  }
  onlyService:any=[];
  data: any;
  description: any;
  getDescription() {
    let agentId = localStorage.getItem('agentId');
    this.data = {
      id: agentId,
    };
    this.http.getAgent(this.data).subscribe((res) => {
      this.description = res;
      console.log(this.description);
    });
  }
  price: any;
  fruits: any;
  pricearr: any = [];
  getVal(ser: any, pr: any) {
    // console.log(ser);
    // console.log(pr);
    this.serviceWithPrice = {
      service: ser,
      price: parseInt(pr),
    };
    this.service={
      service:ser
    }
    console.log(typeof this.serviceWithPrice.price);
    this.onlyService.push(this.service);
    this.servicesData.push(this.serviceWithPrice);
    console.log(this.servicesData);
    // for (let i = 0; i < this.servicesData.length; i++) {
    //   this.onlyService[i] = this.servicesData[i].service;
    // }
    console.log(this.onlyService);

    // let sum: Number = 0;
    // for (let i = 0; i < this.pricearr.length; i++) {
    //   if (this.pricearr[i]) {
    //     sum = sum + this.pricearr[i];
    //   } else {
    //     sum = 0;
    //   }
    // }
    // console.log(sum);
    // this.price = sum;
    // console.log(this.price);
  }
  pricearr2: any = [];
  deleteSubdest(id: any) {
    this.servicesData = this.servicesData.filter((v: any, i: any) => i != id);
    this.onlyService = this.onlyService.filter((v: any, i: any) => i != id);
    
    console.log(this.servicesData);
    console.log(this.onlyService);
    // for (let i = 0; i < this.servicesData.length; i++) {
    //   this.onlyService[i] = this.servicesData[i].service;
    // }
    // console.log(this.pricearr2);

    // let sum: Number = 0;
    // for (let i = 0; i < this.pricearr2.length; i++) {
    //   if (this.pricearr2[i]) {
    //     sum = sum + this.pricearr2[i];
    //   } else {
    //     sum = 0;
    //   }
    // }
    // if (this.pricearr2.length == 0) {
    //   sum = 0;
    //   this.price = 0;
    // }
    // console.log(sum);
    // this.price = sum;
    // console.log(this.price);
    // console.log(this.pricearr2);
  }
  getSum(){
    // for (let i = 0; i < this.servicesData.length; i++) {
    //   this.pricearr[i] = this.servicesData[i].price;
    // }
    // console.log(this.pricearr);

    // let sum: Number = 0;
    // for (let i = 0; i < this.pricearr.length; i++) {
    //   if (this.pricearr[i]) {
    //     sum = sum + this.pricearr[i];
    //   } else {
    //     sum = 0;
    //   }
    // }
    // console.log(sum);
    // this.price = sum;
    // console.log(this.price);
  }


orderData:any={
  name:"",
  service:"",
  subservice:[],
  price:0,
  address:"",
  phone:0,
  agentid:""
}
  orderRes:any;
  giveOrder(serv:any,name:any,contact:any,address:any,price:any){
    console.log(serv);
    this.orderData={
      name:name,
      service:serv,
      subservice:this.onlyService,
      price:parseInt(price),
      address:address,
      phone:parseInt(contact),
      agentid:this.description._id,
      userid:localStorage.getItem("userId")
    }
    console.log(this.orderData);
    
    this.http.placeOrder(this.orderData).subscribe(res=>{
      console.log(res);
      this.orderRes=res;
      if(this.orderRes.message=="Order Placed Successfully"){
        alert("Your order has been placed successfully");
      }
    })
  }

  
}
