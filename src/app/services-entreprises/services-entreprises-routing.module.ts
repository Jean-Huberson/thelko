import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesEntreprisesPage } from './services-entreprises.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesEntreprisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesEntreprisesPageRoutingModule {}
