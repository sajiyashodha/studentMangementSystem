import { PageServerErrorComponent } from './shared/pages/page-server-error/page-server-error.component';
import { AuthGuard } from './security/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { PageNotAuthorizedComponent } from './shared/pages/page-not-authorized/page-not-authorized.component';
import { HomeComponent } from './pages/home/home.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { ResultComponent } from './pages/result/result.component';

const routes: Routes = [
  // Default Routes
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'calender',  component:CalenderComponent, data: { breadcrumb: 'calender' }},
  { path: 'result',  component:ResultComponent, data: { breadcrumb: 'result' }},

  // Special Routes
  {
    path: 'home',
    component: HomeComponent,
    // data: { breadcrumb: 'Home Page', subtitle: 'To navigate use the menu or quick access' },
    canActivate: [AuthGuard],
    children: [
      { path: 'calender', component:CalenderComponent },
      { path: 'result', component:ResultComponent },
      // Page Errors
      { path: '404', component: PageNotFoundComponent },
      { path: '403', component: PageNotAuthorizedComponent },
      { path: '500', component: PageServerErrorComponent },


    ]
  },
  // Page Errors
  { path: '404', component: PageNotFoundComponent },
  { path: '403', component: PageNotAuthorizedComponent },
  { path: '500', component: PageServerErrorComponent },


  //   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
