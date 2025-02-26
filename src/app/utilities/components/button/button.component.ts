import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input()
  public title = 'Titulo de botón';

  @Input()
  public type = 'button';

  @Input()
  public srcImg = '';

  @Input()
  public altImg = '';

  @Input()
  public widhtImg = '';

  @Input()
  public heightImg = '';
}
