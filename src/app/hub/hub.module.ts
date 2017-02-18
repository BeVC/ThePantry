import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HubComponent } from './ui/hub/hub.component';

import { HubRoutingModule } from "./hub-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HubRoutingModule
  ],
  declarations: [HubComponent]
})
export class HubModule { }
