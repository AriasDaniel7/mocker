import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as YAML from 'yaml';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, switchMap, throwError } from 'rxjs';
import { Schema } from '../interfaces/schema.interface';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  private URL = environment.URL;
  private _refresh$ = new BehaviorSubject<void>(undefined);

  constructor(private http: HttpClient) {}

  get refresh$() {
    return this._refresh$.asObservable();
  }

  createSchema(file: File) {
    const allowedExtensions = ['.yaml', '.yml'];
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!(extension && allowedExtensions.includes(`.${extension}`))) {
      return throwError(
        () =>
          new Error(
            'Formato de archivo no permitido. Solo se permiten archivos .yaml o .yml.'
          )
      );
    }

    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = YAML.parse(e.target?.result as string);

          this.http.post(`${this.URL}/schema`, data).subscribe({
            next: (response) => {
              observer.next(response);
              observer.complete();
              this._refresh$.next();
            },
            error: (error) => {
              observer.error(error);
            },
          });
        } catch (error) {
          observer.error(new Error('Error al leer el archivo.'));
        }
      };
      reader.readAsText(file);
    });
  }

  getSchemas() {
    return this._refresh$.pipe(
      switchMap(() => this.http.get<Schema[]>(`${this.URL}/schema/short`))
    );
  }
}
