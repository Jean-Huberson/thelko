import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecteurActivitePageRoutingModule } from './secteur-activite-routing.module';

import { SecteurActivitePage } from './secteur-activite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecteurActivitePageRoutingModule
  ],
  declarations: [SecteurActivitePage]
})
export class SecteurActivitePageModule {}
