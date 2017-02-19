import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  loggedIn: boolean = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(){
    if(!this.loggedIn){
    let path = "login";
    this.router.navigate([path]);
    } else{
      let path = "hub";
    this.router.navigate([path]);
    }
  }
}
