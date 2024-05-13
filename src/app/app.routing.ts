import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Route } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MealPlanComponent } from "./meal-plan/meal-plan.component";
import { RecetasComponent } from "./recetas/recetas.component";
import { VinosComponent } from "./vinos/vinos.component";

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'meal-plan', component: MealPlanComponent},
    {path: 'recetas', component: RecetasComponent},
    {path: 'vinos', component: VinosComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);