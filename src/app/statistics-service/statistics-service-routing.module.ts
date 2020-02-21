import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatisticsServicePage } from './statistics-service.page';

const routes: Routes = [
  {
    path: '',
    component: StatisticsServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatisticsServicePageRoutingModule {}
