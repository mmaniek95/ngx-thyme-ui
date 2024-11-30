import { Component, NgModule } from '@angular/core';

import { ButtonComponent } from "../../projects/ngx-thyme-ui/src/lib/button/button.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { InputComponent } from "../../projects/ngx-thyme-ui/src/lib/input/input.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonTitle: string = 'ThymeUiLibrary';
  menuItems: [string, string] = ['a', 'b'];

  value1: string = 'value1';
  value2: string = 'value2';
}
