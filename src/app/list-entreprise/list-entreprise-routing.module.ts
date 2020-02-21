import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEntreprisePage } from './list-entreprise.page';

const routes: Routes = [
  {
    path: '',
    component: ListEntreprisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEntreprisePageRoutingModule {}
