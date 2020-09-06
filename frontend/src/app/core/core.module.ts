import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileService } from './services/profile/profile.service'
import { TorreApiService } from './services/torreApi/torre-api.service'
  
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers: [
    ProfileService,
    TorreApiService
  ]
})
export class CoreModule { }
