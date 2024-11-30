import { Component, Input } from '@angular/core';

@Component({
  selector: 'NgxThyme-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonTitle: string = '';

}
