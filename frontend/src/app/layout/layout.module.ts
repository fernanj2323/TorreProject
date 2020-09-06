import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module'
import { CoreModule } from '../core/core.module';
import { SelectedUsersListComponent } from './components/selected-users-list/selected-users-list.component';

@NgModule({
  declarations: [
    UserListComponent, 
    LayoutComponent, SelectedUsersListComponent
  ],
   exports: [
    LayoutComponent, 
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule
  ]
})
export class LayoutModule { }
