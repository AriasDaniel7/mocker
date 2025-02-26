import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../utilities/components/button/button.component';
import { SearchComponent } from '../../../utilities/components/search/search.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, ButtonComponent, SearchComponent, TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
