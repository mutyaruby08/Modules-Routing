import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcecreamRoutingModule } from './icecream-routing.module';
import { CookiesCreamComponent } from './cookies-cream/cookies-cream.component';
import { ChocolateComponent } from './chocolate/chocolate.component';
import { VanillaComponent } from './vanilla/vanilla.component';
import { DessertComponent } from './dessert/dessert.component';


@NgModule({
  declarations: [
    CookiesCreamComponent,
    ChocolateComponent,
    VanillaComponent,
    DessertComponent
  ],
  imports: [
    CommonModule,
    IcecreamRoutingModule
  ]
})
export class IcecreamModule { }
