import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  public title = 'Titulo de botón';

  @Input()
  public type = 'button';
}
