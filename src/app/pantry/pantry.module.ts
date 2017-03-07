import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantryService } from "./service/pantry.service";

import { PantryComponent } from './ui/pantry/pantry.component';

import { PantryRoutingModule } from "./pantry-routing.module";
import { PantryListComponent } from './ui/pantry-list/pantry-list.component';

@NgModule({
  imports: [
    CommonModule,
    PantryRoutingModule
  ],
  declarations: [
    PantryComponent,
    PantryListComponent
  ],
  providers: [
    PantryService
  ]
})
export class PantryModule { }
