import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./modules/landing/landing-routing.module').then(m => m.LandingRoutingModule),
    pathMatch: 'full'
  },
  { 
    path: 'log-in',
    loadChildren: () => import('./modules/log-in/log-in.module').then(m => m.LogInModule),
    pathMatch: 'full'
  },
  { 
    path: 'sign-up',
    loadChildren: () => import('./modules/sign-up/sign-up-routing.module').then(m => m.SignUpRoutingModule),
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
