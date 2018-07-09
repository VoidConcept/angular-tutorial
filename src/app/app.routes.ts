
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import {RouterModule, Routes } from '@angular/router';

const AppRouterService: Routes = [
    { path: "home", component: HomeComponent },
    { path: "test", component: TestComponent },
    { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const AppRoutingService = RouterModule.forRoot(AppRouterService,{useHash: true});