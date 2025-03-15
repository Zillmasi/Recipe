import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../Services/flowbite.service';


import { FooterComponent } from './footer/footer.component';
import { NavSideBarComponent } from "./nav-side-bar/nav-side-bar.component";
import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Recipe';

}
