import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Upload } from './Upload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private http: AuthService) {}

  ngOnInit(): void {}

  File: any = {};
  File1: any = {};
  images: any = [];
  FileName: any = '';
  urllink:any="./../../../assets/img/carpenter.jpg"
  onFileChange(event: any) {
    // var reader = new FileReader();
    // reader.readAsDataURL(event.target.files[0]);
    // console.log(event.target.result);
    
    // this.File = event.target.files[0];
    // console.log(this.File);

    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.urllink=event.target.result
        console.log(this.urllink);
        
      }
    }
    
    // this.File1 = new FormData();
    // this.File1.append('file', this.File);
    // console.log(this.File1);
    // let fileSize = this.File.size / 1024;
    // console.log(fileSize);
    // this.images.push(this.File1);
    // console.log(this.images[0].name);
    // this.FileName = this.File.name;
    // console.log('Selected File is ' + this.File1);
    // console.log(this.File);
  }
  RegisterData: any = {};

  service: any = '';
  subservices: any;
  subservicesData: any;
  Change(data: any) {
    console.log(data.target.value);
    this.service = data.target.value;
    if (this.service == 'Carpenter') {
      this.http.getCarpenters().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.carpentersdata
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'AC servicing') {
      this.http.getACrepair().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.acrepairdata;
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'Plumber') {
      this.http.getPlumbers().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.plumberdata;
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'Painter') {
      this.http.getPainters().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.paintersdata;
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'Electrician') {
      this.http.getElectrician().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.electriciandata;
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'House Cleaning') {
      this.http.getHouseclean().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.housecleaningdata;
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'TV servicing') {
      this.http.getTVrepair().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.tvrepairdata;
        console.log(this.subservicesData);
        
      });
    }
    if (this.service == 'Water Purifier servicing') {
      this.http.getWaterpurifier().subscribe((res) => {
        this.subservices = res;
        this.subservicesData=this.subservices.waterpurifierdata;
        console.log(this.subservicesData);
        
      });
    }
  }
  productSubDestination:any=[];
  showSubdestination(type:any,subdesti:any,hot:any,srNo:any){
    let ptype=type;
    let subd=subdesti;
    let hotels=hot;    
    
    console.log(this.productSubDestination);  
  }
  deleteSubdest(id:any){
    this.productSubDestination = this.productSubDestination.filter((v:any, i:any) => i != id);
  }
  addValues(service:any,price:any){
    console.log();
    this.productSubDestination.push({
      service:service,
      price:price
    })
  }


  register(data: any) {
    this.RegisterData = {
      city: data.city,
      contact: data.contact,
      email: data.email,
      image: this.urllink,
      name: data.name,
      service: data.service,
      state: data.state,
      zip: data.zip,
      subservice:this.productSubDestination
    };
    // console.log(this.RegisterData);
    this.http.registerAgent(this.RegisterData).subscribe((res) => {
      console.log(res);
    });
  }
}
