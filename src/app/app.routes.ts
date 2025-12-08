import { Routes } from '@angular/router';
import { DjDetails } from './components/dj/dj-details/dj-details';
import { DjList } from './components/dj/dj-list/dj-list';

export const routes: Routes = [
  {
    path: 'dj/details',
    component: DjDetails,
  },
  {
    path: 'dj/list',
    component: DjList,
  },
  {
    path: 'performances/details',
    component: DjDetails,
  },
  {
    path: 'performances/list',
    component: DjList,
  },


];
