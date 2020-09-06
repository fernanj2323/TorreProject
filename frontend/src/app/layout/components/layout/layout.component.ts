import { Component, OnInit } from '@angular/core';

import { TorreApiService } from 'src/app/core/services/torreApi/torre-api.service'
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

declare var jQuery:any; 
declare var $:any; 
declare var Materialize: any; 
declare var M: any; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public users
  public selected ;
  public changueIcon = false 
  public type 
  public showResult = false 

  constructor(
    private torreApiService : TorreApiService 
  ) { }

  ngOnInit(){
    
      this.material()
  }

  findSelectedProfile(username){


    this.torreApiService.getBioByUserName(username).subscribe
    (res=> {
   
      const response = res as any

      if (response.status == 200){
        console.log('200')
       
        this.users = response.data.person; 
        console.log(this.users)
        this.showResult = true; 
      }else{
          // aqui manejamos el error 
      }
    })
  }


  material(){

    $(document).ready(function(){
      $('select').formSelect();
    });
          
  }


  subitForm(form: NgForm){
    
      var selected = form.value.inputSelected
      this.type = form.value.type
     

      // username 
      if (this.type == '1'){
        this.findSelectedProfile(selected)
      }
      
  }

  capture(event){

    if (  
      event == '1' || 
      event == '2'|| 
      event == '3'  
           ){
              this.changueIcon = true
           }
  }
 

}
