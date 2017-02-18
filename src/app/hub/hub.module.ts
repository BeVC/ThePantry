import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubComponent } from './ui/hub/hub.component';
import { PantryModule } from "../pantry/pantry.module";

import { HubRoutingModule } from "./hub-routing.module";
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    PantryModule,
    HubRoutingModule
  ],
  declarations: [
    HubComponent,
    NavbarComponent
  ]
})
export class HubModule { }
