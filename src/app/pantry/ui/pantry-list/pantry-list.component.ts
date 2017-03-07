//#region import
// ANGULAR
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// SERVICE
import { PantryService } from "../../service/pantry.service";

// BROKER
import { UserBroker } from "../../../broker/user.service";

// MODELS
import { User } from "../../../models/user";
//#endregion

@Component({
  selector: 'app-pantry-list',
  templateUrl: './pantry-list.component.html',
  styleUrls: ['./pantry-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PantryListComponent implements OnInit {
  // UI PROPERTIES
  pantryListCol: any[] = [];
  user: User;

  // CLASS PROPERTIES

  constructor(
    private pantryService: PantryService,
    private userBroker: UserBroker
  ) { }

  //#region Angular Events
  ngOnInit() {
    this.user = this.userBroker.getUser();
  }
  //#endregion

  //#region UI Events
  test() {
    this.getAllPantryItems();
  }
  //#endregion

  //#region Public Class Methods
  //#endregion

  //#region Private Class Methods
  private getAllPantryItems() {
    let pantryId = this.user.pantryId;
    this.pantryService.getPantryItemsAsync(pantryId)
      .subscribe(response => {
        if (response.ok) {
          let col = response.data;
          this.pantryListCol = col.filter(item => item.pantryId == pantryId);
        }
      });
  }
  //#endregion
}
