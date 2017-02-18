import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HubComponent } from "./ui/hub/hub.component";

const hubRoutes: Routes = [
    {
        path: "hub", component: HubComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(hubRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HubRoutingModule { }