import { ActivatedRoute } from '@angular/router';
import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ApiDataService } from '../../Services/api-data.service';
import { ImealsDet } from '../imeals-det';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
})
export class MealDetailsComponent implements OnInit, OnDestroy {
  private readonly apidataservice = inject(ApiDataService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly Id = inject(PLATFORM_ID);
  mealsDet: ImealsDet[] = [];

  subApi: Subscription = new Subscription();
  subActive: Subscription = new Subscription();
  getDet() {
    this.subActive = this.activatedRoute.paramMap.subscribe((params) => {
      const MealId = params.get('MealId');

      if (MealId) {
        this.subApi = this.apidataservice.getDetailsMeal(MealId).subscribe({
          next: (res) => {
            this.mealsDet = res.meals;
          },
        });
      }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.Id)) {
      this.getDet();
    }
  }

  ngOnDestroy(): void {
    this.subApi.unsubscribe();
    this.subActive.unsubscribe();
  }
}
