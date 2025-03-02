import { Component, Input } from '@angular/core';
import { Schema } from '../../interfaces/schema.interface';

@Component({
  selector: 'app-schema-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input()
  public schemas: Schema[] = [];
}
