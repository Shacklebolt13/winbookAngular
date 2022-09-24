import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GenericPageComponent } from './generic-page/generic-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { CredentialPageComponent } from './credential-page/credential-page.component';
import { LoginComponent } from './credential-page/login/login.component';
import { SignupComponent } from './credential-page/signup/signup.component';

const routes: Routes = [
  {
    path: 'account',
    component: CredentialPageComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ],
  },
  {
    path: '',
    component: GenericPageComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      { path: '', component: HomeComponent },
      { path: 'discover', component: DiscoverComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
