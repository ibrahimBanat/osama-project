import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {SectorComponent} from "../core/sector/sector.component";



@NgModule({
  declarations: [
    UserComponent,
    SectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
