import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../utilities/components/button/button.component';
import { SearchComponent } from '../../../utilities/components/search/search.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, ButtonComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
