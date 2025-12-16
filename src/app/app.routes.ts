import { Routes } from '@angular/router';
import { DjDetails } from './components/dj/dj-details/dj-details';
import { DjList } from './components/dj/dj-list/dj-list';
import {Home} from './components/home/home';
import {PerformanceList} from './components/performances/performance-list/performance-list';
import {PerformanceDetails} from './components/performances/performance-details/performance-details';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'dj/details/:id',
    component: DjDetails,
  },
  {
    path: 'dj/list',
    component: DjList,
  },
  {
    path: 'performances/details/:id',
    component: PerformanceDetails,
  },
  {
    path: 'performances/list',
    component: PerformanceList,
  },


];
