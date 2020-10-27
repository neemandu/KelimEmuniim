import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PackContentPageComponent } from './Pages/pack-content-page/pack-content-page.component';
import { ShoppingCartPageComponent } from './Pages/shopping-cart-page/shopping-cart-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'shopping-cart-page', component: ShoppingCartPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'pack-view/:id', component: PackContentPageComponent },
  // { path: 'all-packs-view', component: FirstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
