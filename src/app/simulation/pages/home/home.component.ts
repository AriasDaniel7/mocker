import { Component } from '@angular/core';
import { SearchComponent } from '../../../utilities/components/search/search.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-home',
  imports: [SearchComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
