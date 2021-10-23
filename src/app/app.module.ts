import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IcecreamModule } from './icecream/icecream.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    IcecreamModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
