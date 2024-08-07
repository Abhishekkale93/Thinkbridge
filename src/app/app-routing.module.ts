import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurant/restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './restaurant/restaurant-edit/restaurant-edit.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/add', component: RestaurantAddComponent },
  { path: 'restaurants/edit/:id', component: RestaurantEditComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: '**', redirectTo: '/restaurants' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
