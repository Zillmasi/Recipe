import { Routes } from '@angular/router';
import path from 'node:path';
import { MealsComponent } from './meals/meals.component';
import { title } from 'node:process';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

export const routes: Routes = [
  {
    path: '',
    component: NavSideBarComponent,
    children: [
      { path: '', redirectTo: 'Category/all', pathMatch: 'full' },
      {
        path: 'Category/:CategoryName',
        component: MealsComponent,
        title: 'Meals',
      },
      {
        path: 'Mealdetails/:MealId',
        component: MealDetailsComponent,
        title: 'Mealdetails',
      },
    ],
  },
];
