import { Component } from '@angular/core';
import { SearchComponent } from '../../../utilities/components/search/search.component';

@Component({
  selector: 'app-home',
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
