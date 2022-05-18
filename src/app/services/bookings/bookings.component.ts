import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private http:AuthService) { }

  ngOnInit(): void {
    console.log(this.userId);
    this.getUserOrders();
    
  }
  data:any;
  order:any;
  orderData:any;
  userId:any=localStorage.getItem("userId");
  getUserOrders(){
    this.data={
      userid:this.userId
    }
    this.http.userOrders(this.data).subscribe(res=>{
      console.log(res);
      this.order=res;
      this.orderData=this.order.userorderdata;
      console.log(this.orderData);
      
    })
  }
  price:any=100;
  getVal(pr:any){
    this.price=pr;
    console.log(this.price);
    
  }
  options = {
    "key": "rzp_test_34FrsccxeCR17P", // Enter the Key ID generated from the Dashboard
    "amount": this.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "At your service",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response:any){
      alert("Your transaction is successfull");
  },
    "prefill": {
        "name": "At your Service",
        "email": "atyourservice@gmail.com",
        "contact": "9370738931"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
rzp1:any;
pay(){
  this.rzp1 = new this.http.nativeWindow.Razorpay(this.options);
  this.rzp1.open();
  this.rzp1.on('payment.failed', function (response:any){
    alert("Oops something went wrong do try again");
});
}
}
