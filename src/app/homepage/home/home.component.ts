import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route1:Router) { }

  ngOnInit(): void {
  }
  route(){
    this.route1.navigate(["/about/aboutus"])
  }
  service(){
    this.route1.navigate(["/Services/services"]);
  }
}
