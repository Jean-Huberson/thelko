import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuarService } from './services/auth-guar.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuarService]
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'secteur-activite',
    loadChildren: () => import('./secteur-activite/secteur-activite.module').then( m => m.SecteurActivitePageModule)
  },
  {
    path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then( m => m.EntreprisePageModule)
  },
  {
    path: 'list-entreprise',
    loadChildren: () => import('./list-entreprise/list-entreprise.module').then( m => m.ListEntreprisePageModule)
  },
  {
    path: 'services-entreprises',
    loadChildren: () => import('./services-entreprises/services-entreprises.module').then( m => m.ServicesEntreprisesPageModule)
  },
  {
    path: 'review-service',
    loadChildren: () => import('./review-service/review-service.module').then( m => m.ReviewServicePageModule)
  },
  {
    path: 'statistics-service',
    loadChildren: () => import('./statistics-service/statistics-service.module').then( m => m.StatisticsServicePageModule)
  },
  {
    path: 'message-box',
    loadChildren: () => import('./message-box/message-box.module').then( m => m.MessageBoxPageModule)
  },
  {
    path: 'send',
    loadChildren: () => import('./send/send.module').then( m => m.SendPageModule)
  },
  {
    path: 'view-message',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
