import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'schemas', pathMatch: 'full' },
  {
    path: 'schemas',
    loadComponent: () =>
      import('./scheme/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'simulations',
    loadComponent: () =>
      import('./simulation/pages/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'schemas',
  },
];
