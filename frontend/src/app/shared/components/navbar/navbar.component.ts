import { Component, OnInit } from '@angular/core';

declare var jQuery:any; 
declare var $:any; 
declare var Materialize: any; 
declare var M: any; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.material()
  }


  material(){
    $(".dropdown-trigger").dropdown();
  }
}
