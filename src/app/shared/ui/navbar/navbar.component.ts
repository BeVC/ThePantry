//#region import
// ANGULAR
import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { Router } from "@angular/router";

// RXJS
import { Subscription } from "rxjs";

// BROKER
import { UserBroker } from "../../../broker/user.service";

// MODEL
import { User } from "../../../models/user";
//#endregion

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnChanges {
  // UI PROPERTIES
  name: string = "";

  @Input("user") user: User

  constructor(
    private router: Router,
    private userBroker: UserBroker
  ) { }

  //#region Angular Events
  ngOnInit() {
  }

  ngOnDestroy() {
  }

  ngOnChanges(){
    if(this.user){
      this.name = this.user.firstName + " " + this.user.lastName;
    }else{
      this.name = "";
    }
  }
  //#endregion

  //#region UI Events
  uiOnReturnToHubClicked() {
    let path:string = "/hub";
    this.router.navigate([path]);
  }

  uiOnLogoutClicked(){
    this.userBroker.setUser(undefined);
    let path: string = "/login";
    this.router.navigate([path]);
  }
  //#endregion
}
