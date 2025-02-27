import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, ButtonComponent, SearchComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
