import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { MealDetailsComponent } from "../meal-details/meal-details.component";

@Component({
  selector: 'app-nav-side-bar',
  imports: [RouterOutlet, FooterComponent ],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss',
})
export class NavSideBarComponent {}
