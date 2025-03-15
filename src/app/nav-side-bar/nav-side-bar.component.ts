import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { MealDetailsComponent } from "../meal-details/meal-details.component";
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-nav-side-bar',
  imports: [RouterOutlet, FooterComponent , NgxSpinnerComponent],
  templateUrl: './nav-side-bar.component.html',
  styleUrl: './nav-side-bar.component.scss',
})
export class NavSideBarComponent {
    private readonly spinner = inject(NgxSpinnerService)
    ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();
  
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);
    }
}
