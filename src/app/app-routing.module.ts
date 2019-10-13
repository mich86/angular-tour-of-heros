import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //routing functionality
import { HeroesComponent } from './heroes/heroes.component'; //gives Router somewhere to go
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //adds RouterModule to AppRoutingModule imports array & configures
  exports: [RouterModule] //AppRoutingModule exports RouterModule so it's availble throughout the app
})
export class AppRoutingModule {}
