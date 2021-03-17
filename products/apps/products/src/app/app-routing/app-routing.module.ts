import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from '../empty-route/empty-route.component';

const routes: Routes =  [
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () =>
      import('@nx-example/products/home-page').then(
        module => module.ProductsHomePageModule
      )
  },
  {
    path: 'products/product',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('@nx-example/products/product-detail-page').then(
        module => module.ProductsProductDetailPageModule
      )
  },
  { path: '**', component: EmptyRouteComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    AppRoutingRoutingModule
  ],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
