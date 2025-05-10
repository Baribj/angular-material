import { Routes } from '@angular/router';
import { ListsComponent } from './pages/lists/lists.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'lists', component: ListsComponent },
  { path: '**', component: NotFoundComponent },
];
