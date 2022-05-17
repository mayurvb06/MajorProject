import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private http:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  getServices(){
    
  }
  getVal(val:any){
    // this.http.setData(val);
    localStorage.setItem("service",val);
    console.log(val);
    this.route.navigate(["/Services/serviceList"]);
    return this.http.getAllAgents().subscribe(res=>{
      console.log(res);
    })
  }
}
