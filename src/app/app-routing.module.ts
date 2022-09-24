import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GenericPageComponent } from './generic-page/generic-page.component';
import { DiscoverComponent } from './discover/discover.component';

const routes: Routes = [
  {
    path: '',component:GenericPageComponent,
    children:[
      {
        path:'about', component:AboutComponent
      },
      { path: 'home', component: HomeComponent,},
      {path:'discover', component:DiscoverComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
