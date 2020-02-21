import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecteurActivitePage } from './secteur-activite.page';

const routes: Routes = [
  {
    path: '',
    component: SecteurActivitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecteurActivitePageRoutingModule {}
