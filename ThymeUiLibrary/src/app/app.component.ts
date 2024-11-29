import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxThymeUiModule } from "../../projects/ngx-thyme-ui/src/lib/ngx-thyme-ui.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxThymeUiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ThymeUiLibrary';
}
