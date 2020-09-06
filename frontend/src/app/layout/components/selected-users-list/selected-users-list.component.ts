import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile/profile.service'
import { SelectedUser } from 'src/app/models/selectedUser'

declare var jQuery:any; 
declare var $:any; 
declare var Materialize: any; 
declare var M: any; 

@Component({
  selector: 'app-selected-users-list',
  templateUrl: './selected-users-list.component.html',
  styleUrls: ['./selected-users-list.component.css']
})
export class SelectedUsersListComponent implements OnInit {
  
  Users:SelectedUser 
  public pageActual = 1; 
  FilterUsername = ''
  constructor(
    private profileService: ProfileService 
  ) { }

  ngOnInit(): void {
    this.findUsers()
    this.materialize()
  }


  findUsers(){
    this.profileService.getUsersSelected().subscribe
    (res=>{
      this.Users = res as SelectedUser;
    },err => {
      M.toast({html: 'server error'})
    })
  }

  capureSelectedUser(user:SelectedUser ){

    const array =  ({
      color: ' lime darken-3', 
      selectedStatus: 1 
    })


    this.profileService.putUserSelected(array, user._id).subscribe
    (res=>{
     
        const response = res as any 
        if (response.status == 200){
        
            this.findUsers()
        
        }
    },err =>{
      M.toast({html: 'server error'})
    })
  }


  UnSelectedUser(user:SelectedUser ){

    const array =  ({
      color: 'transparent', 
      selectedStatus: 0
    })


    this.profileService.putUserSelected(array, user._id).subscribe
    (res=>{
      
        const response = res as any 
        if (response.status == 200){
        
            this.findUsers()
        
        }
    },err =>{
      M.toast({html: 'server error'})
    })
  }

  deleteUser(id){
    this.profileService.deleteUserSelected(id).subscribe
    (res=>{
      
        const response = res as any 
        if (response.status == 200){
        
            this.findUsers()
        
        }
    },err =>{
      M.toast({html: 'server error'})
    })
  }


  materialize(){
    
    $(document).ready(function(){
      $('.tooltipped').tooltip();
    });
    }
  

}
