import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:query',
    component: SearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
