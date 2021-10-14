import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shoping-cart',component:ShopingCartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
