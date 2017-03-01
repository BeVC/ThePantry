//#region import
// ANGULAR
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// RXJS
import { Subscription } from "rxjs"

// BROKER
import { UserBroker } from "./broker/user.service";

// MODELS
import { User } from "./models/user"

//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title: string = 'app works!';
  loggedIn: boolean = false;
  user: User;


  // BROKER SUBSCRIPTIONS
  private _userLoggedSubscription: Subscription

  constructor(
    private router: Router,
    private userBroker: UserBroker
  ) { }

  //#region Angular Events
  ngOnInit() {
    this._userLoggedSubscription = this.userBroker.onUserLoggedAsync()
      .subscribe(user => {
        this.user = user;
      });

    if (!this.loggedIn) {
      let path = "login";
      this.router.navigate([path]);
    } else {
      let path = "hub";
      this.router.navigate([path]);
    }
  }

  ngOnDestroy() {
    this._userLoggedSubscription.unsubscribe();// -> probably useless
  }
  //#endregion
}
