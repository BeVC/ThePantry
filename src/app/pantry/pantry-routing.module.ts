import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PantryComponent } from "./ui/pantry/pantry.component";
import { PantryListComponent } from "./ui/pantry-list/pantry-list.component";

const pantryRoutes: Routes = [
    {
        path: "pantry",
        component: PantryComponent,
        children: [
            {
                path: "",
                component: PantryListComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pantryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PantryRoutingModule { }