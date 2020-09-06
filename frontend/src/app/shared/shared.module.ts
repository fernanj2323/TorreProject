import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';


import { sharedRoutingModule } from './shared-routing.module';
import { UserNamePipe } from './pipes/user-name.pipe'


@NgModule({

  imports: [
    CommonModule,
    sharedRoutingModule
  
  ],

  declarations: 
  [
    NavbarComponent,
    UserNamePipe
  ], 

  exports: [
    NavbarComponent

  ]
})
export class SharedModule { }
