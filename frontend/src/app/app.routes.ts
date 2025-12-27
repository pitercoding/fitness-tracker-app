import { Routes } from '@angular/router';
import { ActivityComponent } from './components/activity/activity.component';

export const routes: Routes = [
  { path: '', redirectTo: 'activity', pathMatch: 'full' },
  { path: "activity", component: ActivityComponent }
];
