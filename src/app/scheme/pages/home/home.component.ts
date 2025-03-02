import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { TableComponent } from '../../components/table/table.component';
import { SchemaService } from '../../services/schema.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Schema } from '../../interfaces/schema.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    ButtonComponent,
    SearchComponent,
    TableComponent,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  public schemas: Schema[] = [];
  public loading = true;
  public suscription: Subscription = new Subscription();

  constructor(
    private schemaService: SchemaService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.suscription.add(
      this.schemaService.getSchemas().subscribe((schemas) => {
        this.schemas = schemas;
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  createSchema(file: File) {
    this.schemaService.createSchema(file).subscribe({
      next: () => {
        this.snackBar.open('Esquema creado correctamente.', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: ['snackbar-success'],
        });
      },
      error: (error) => {
        this.snackBar.open(error.error.message, 'Cerrar', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: ['snackbar-error'],
        });
      },
    });
  }
}
