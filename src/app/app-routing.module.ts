import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{
  path: 'home', component: HomeComponent,
},
{
  path: '', component: HomeComponent,
},
{
  path: 'color', component: ColorComponent,
},
{
  path: '**', component: NotfoundComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
