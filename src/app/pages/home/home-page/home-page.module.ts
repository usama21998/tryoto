import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home-page.component";


export const routes: Routes = [
    { path: '', component: HomeComponent },

];

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ]
})
export class HomeModule { }
