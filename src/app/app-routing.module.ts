import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';
const appRoutes: Routes = [

    { path: '', redirectTo: '/hub', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes/*, { useHash: true }*/)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
