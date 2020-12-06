import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './dance-features/component/contact/contact.component';
import {ActyvitiesComponent} from './dance-features/component/actyvities/actyvities.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'contact', component: ContactComponent},
      {path: 'activities', component: ActyvitiesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
