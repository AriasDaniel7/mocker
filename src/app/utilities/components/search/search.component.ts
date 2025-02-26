import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-utilities-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input()
  title: string = 'Busqueda de elementos';
}
