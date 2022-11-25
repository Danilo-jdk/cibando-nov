import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { EsempioComponent } from './components/esempio/esempio.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { VideoComponent } from './components/video/video.component';
import { NuovaRicettaComponent } from './components/recipes/nuova-ricetta/nuova-ricetta.component';
import { LoggedInGuard } from './logged-in.guard';
import { ResultComponent } from './components/recipes/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'ricette', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent},
    { path: 'nuova-ricetta', component: NuovaRicettaComponent},
    { path: 'result', component: ResultComponent},
    { path: '', pathMatch: 'full', component: RecipesListComponent}
  ]},
  { path: 'registrazione', component: RegistrationComponent},
  { path: 'esempio', component: EsempioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profilo', component: ProfileComponent, canActivate: [LoggedInGuard]},
  { path: 'video', component: VideoComponent, canActivate: [LoggedInGuard]},
  // { path: 'ricette', component: RecipesComponent},
  // { path: 'dettaglio/:_id', component: DetailComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
