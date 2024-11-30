import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'NgxThyme-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() inputValue: string = '';


}
