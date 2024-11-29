import { Component, NgModule } from '@angular/core';

import { ButtonComponent } from "../../projects/ngx-thyme-ui/src/lib/button/button.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonTitle: string = 'ThymeUiLibrary';
}
