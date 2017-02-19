//#region Imports
// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// MODULES
import { SharedModule } from "./shared/shared.module";
import { LoginModule } from "./login/login.module";
import { HubModule } from "./hub/hub.module";

// COMPONENTS
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';

// BROKER
import { UserBroker } from "./broker/user.service";
//#endregion

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule,
    LoginModule,
    HubModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [UserBroker],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
