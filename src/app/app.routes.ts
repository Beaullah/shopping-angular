import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: 'body',
    component: BodyComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
];
