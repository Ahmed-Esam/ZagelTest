import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { SourceComponent } from './source/source.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'source/:id', component: SourceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
