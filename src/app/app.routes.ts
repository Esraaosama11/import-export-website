import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'import-egypt',
    loadComponent: () =>
      import('./pages/import-egypt/import-egypt').then(m => m.ImportEgypt)
  },
  {
    path: 'export-egypt',
    loadComponent: () =>
      import('./pages/export-egypt/export-egypt').then(m => m.ExportEgypt)
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products').then(m => m.Products)
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./pages/order/order').then(m => m.Order)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact').then(m => m.Contact)
  },

   {
    path: '**',
    redirectTo: ''
  }
];