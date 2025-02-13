import { Component, inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiDataService } from '../../Services/api-data.service';
import { ICategories } from '../icategories';
import { IMeal } from '../imeal';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { platformBrowser } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-meals',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent implements OnInit , OnDestroy {
  private readonly apiDataService = inject(ApiDataService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly Id = inject(PLATFORM_ID)

  Categories: ICategories[] = [];
  Meals: IMeal[] = [];
  subApi: Subscription = new Subscription();
  subActive: Subscription = new Subscription();
  getcat() {
    this.subApi = this.apiDataService.getAllCategories().subscribe({
      next: (res) => (this.Categories = res.meals),
    });
  }

  Active() {
  this.subActive=  this.activatedRoute.paramMap.subscribe((param) => {
      const catName = param.get('CategoryName');

      if (catName) {
        this.subApi = this.apiDataService.getAllMeals(catName).subscribe({
          next: (res) => (this.Meals = res.meals),
        });
      }
    });
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.Id)){
      this.getcat();
      this.Active();
    }
  
   
  }

  ngOnDestroy(): void {
    this.subApi.unsubscribe();
    this.subActive.unsubscribe();
  }
}
