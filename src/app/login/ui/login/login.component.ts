//#region import
// ANGULAR
import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

// RXJS
import { Subscription } from "rxjs";

// SERVICE
import { LoginService } from "../../service/login.service";

// BROKER
import { UserBroker } from "../../../broker/user.service";

// MODELS
import { User } from "../../../models/user";
//#endregion

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  // UI PROPERTIES
  private email: string = "spam2@email.com";
  private password: string = "Azert2";

  loginForm: NgForm;
  @ViewChild("loginForm") currentForm: NgForm;

  // BROKER SUBSCRIPTIONS
  private _userLoggedInSubscription: Subscription

  constructor(
    private router: Router,
    private loginService: LoginService,
    private userBroker: UserBroker
  ) { }

  //#region Angular Events
  ngOnInit() { }

  ngAfterViewChecked() {
    this.formChanged();
  }
  //#endregion

  //#region UI Events
  onSubmit() {
    console.log("is submitted");
  }

  uiOnLoginFakeClicked() {
    /*this.loginService.getUsers()
      .subscribe((users) => {
        let user: User;
        user = users.find(user => user.email == this.email && user.password == this.password);
        this.userBroker.setUser(user);
        if (user) {
          console.log("log faked");
          let path = "/hub";
          this.router.navigate([path]);
        }
      }, (error) => {
        error;
      })*/

    this.loginService.getUser(this.email, this.password)
      .subscribe(response => {
        if (response.ok) {
          let user: User;
          if (response.data && response.data.length == 1) {
            user = response.data[0];
            this.userBroker.setUser(user);
            if (user) {
              console.log("log faked");
              let path = "/hub";
              this.router.navigate([path]);
            }
          }
        }
      }, error => {
        error;
      });
  }

  uiOnTestClicked() {
    this.loginService.getUsers()
      .subscribe(response => {
        response;
      }, error => { error; })

  }
  //#endregion

  //#region Private Class Functions
  private formChanged() {
    if (this.currentForm === this.loginForm) { return; }
    this.loginForm = this.currentForm;
    if (this.loginForm) {
      this.loginForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  private onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }

  formErrors = {
    "email": "",
    "password": ""
  }

  validationMessages = {
    "email": {
      "required": "Email is required"
    },
    "password": {
      required: "Password is required"
    }
  }
  //#endregion

}
