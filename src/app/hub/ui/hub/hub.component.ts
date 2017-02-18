import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HubComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  test(){
    let path = "pantry";
    this.router.navigate([path]);
  }
}
