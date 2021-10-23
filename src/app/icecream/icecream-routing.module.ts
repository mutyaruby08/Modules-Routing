import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { CookiesCreamComponent } from './cookies-cream/cookies-cream.component';
import { DessertComponent } from './dessert/dessert.component';
import { VanillaComponent } from './vanilla/vanilla.component';

const routes: Routes = [
  {
    path: 'icecream', component: DessertComponent,
    children: [{path : 'chocolate', component: ChocolateComponent},
    {path : 'vanilla', component: VanillaComponent},
    {path : 'cookies-cream', component: CookiesCreamComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IcecreamRoutingModule { }
