//#region import
// ANGULAR
import { Injectable, EventEmitter, OnInit, OnDestroy } from '@angular/core';

// RXJS
import { Observable } from "rxjs/Observable";

// MODELS
import { User } from "../models/user";
//#endregion

@Injectable()
export class UserBroker implements OnInit, OnDestroy {

  // PRIVATE STATES
  private _user: User;

  // CONSTANTS -> CHANNEL NAMES
  private _channelUser: string = "LOGGED_USER";

  // TYPE SAFE EMITTERS
  private _userEmitter: { [channel: string]: EventEmitter<User> } = {};

  constructor() { 
    if(!this._userEmitter[this._channelUser]){
      this._userEmitter[this._channelUser] = new EventEmitter<User>();
    }
  }

  //#region Angular Events
  ngOnInit() { }

  ngOnDestroy() { 
    this._userEmitter[this._channelUser].unsubscribe();
  }
  //#endregion

  //#region Public Async Events
  onUserLoggedAsync():Observable<User>{
    return this._userEmitter[this._channelUser]
    .map((response:User)=>{
      return response;
    })
    .catch((response:User)=>{
      return Observable.of(response);
    });
  }
  //#endregion

  //#region Public Methods
  setUser(user:User){
    console.log("emit_user")
    this._user = user;
    this._userEmitter[this._channelUser].emit(user);

    // ADD HERE IF SESSIONSTORAGE IS USED Y/N
  }

  getUser():User{
    // CHECK INTERNAL MEMORY
    if(this._user){
      return this._user;
    }else {
      // currently nothing
    }
    // RETURN NOTHING -> NO USER LOGGED IN (SHOULDN'T BE POSSIBLE)
    return undefined;
  }
  //#endregion
}