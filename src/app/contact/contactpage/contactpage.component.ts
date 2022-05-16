import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
element:any="home1";
  constructor() { 
   
  }

  ngOnInit(): void {
    // document.getElementsByClassName(this.element)[0]!.classList.toggle("active");
  }

}
