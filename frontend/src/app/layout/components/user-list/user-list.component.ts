import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { SelectedUser } from 'src/app/models/selectedUser'
import { TorreApiService } from 'src/app/core/services/torreApi/torre-api.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  
  @Input() selectedUser:any; 
  @Output() SelectedUser: EventEmitter <any> = new EventEmitter(); 

  constructor( 
 
  ) { }

  ngOnInit() {

 
 
  }

  CaptureSelectedUser(selectedUser){
  
   

    const array = ({
      name: selectedUser.name,
      created: selectedUser.created, 
      picture: selectedUser.picture, 
      publicId: selectedUser.publicId,
      professionalHeadline: selectedUser.professionalHeadline, 
      location: location,
      selectedStatus: 0,
      color: 'transparent'
    })

    this.SelectedUser.emit(array)

    
  }

}
