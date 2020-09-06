import { Component, OnInit } from '@angular/core';

import { TorreApiService } from 'src/app/core/services/torreApi/torre-api.service'
import { ProfileService } from 'src/app/core/services/profile/profile.service'
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { SelectedUser } from 'src/app/models/selectedUser'
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

  public user
  public users
  public selected ;
  public changueIcon = false 
  public type 
  public showResult = false 
  public showPreloader =  false 

  
  constructor(
    private torreApiService : TorreApiService , 
    private profileService: ProfileService 
  ) { }

  ngOnInit(){
    
      this.material()
  }



  material(){

    $(document).ready(function(){
      $('select').formSelect();
    });
          
  }


  subitForm(form: NgForm){
      this.showPreloader = true 
      var selected = form.value.inputSelected
      this.type = form.value.type
     

      // username 
      // if (this.type == '1'){
        this.findSelectedProfile(selected)
      // }
      if (this.type == '2'){
        this.getPeopleByName(selected)
      }
      
  }

  findSelectedProfile(username){
    console.log('username', username)
    this.torreApiService.getBioByUserName(username).subscribe
    (res=> {
      console.log(res)
      const response = res as any
      if (response.status == 200){
        this.user = response.data.person;
        this.showPreloader = false 
        this.showResult = true; 
    }},err => {

      this.showPreloader = false 
      this.showResult = false; 
      M.toast({html: "this user does not exist" })
    })

}


  getPeopleByName(selected){
    console.log('get by name ', selected)
    this.torreApiService.getPeopleByName(selected).subscribe(
      res=>{
        console.log(res)
        this.users = res as any 
        this.showResult = true; 
      },err => {
        console.log(err)
        if (err.status == 300){
          M.toast({html: "this user does not exist" })
        }
      })

  }

  capture(event){

    if (  
      event == '1' || 
      event == '2'  
           ){
              this.changueIcon = true
           }
  }
 

  CaptureSelectedUser(userSelected: SelectedUser){
    

    
    this.profileService.postUserSelected(userSelected).subscribe
    (res=>{
    
      var response = res as any 
      if (response.status == 200 ){
        M.toast({html: 'User Saved'})
      }
    
    },err =>{
       
      if (err.status == 300){
        M.toast({html: 'User was previously saved'})
      }
    })
  }

}
