import { Routes } from '@angular/router';
import { Home } from './internal/home';
export const linksFeature: Routes = [
  {
    path: '',
    component: Home,
    children: [],
  },
];
