//#region import
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { LoginComponent } from './ui/login/login.component';

// ROUTING
import { LoginRoutingModule } from "./login-routing.module";

// SERVICE
import { LoginService } from "./service/login.service";
//#endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule { }
