import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CoursComponent } from './cours/cours.component';
import { TopicsComponent } from './topics/topics.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : '', component: AccueilComponent},
  { path : 'cours', component: CoursComponent, canActivateChild: [AuthGuard],children:[ {path:'', component:LoginComponent}]},
  { path : 'topics/:id', component : TopicsComponent, canActivateChild: [AuthGuard],children:[ {path:'', component:LoginComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }