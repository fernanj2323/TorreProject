import { Component, OnInit, Input } from '@angular/core';
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

  constructor( 
 
  ) { }

  ngOnInit() {

    console.log('children')
 
  }

}
