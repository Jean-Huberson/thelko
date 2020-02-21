import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEntreprisePageRoutingModule } from './list-entreprise-routing.module';

import { ListEntreprisePage } from './list-entreprise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEntreprisePageRoutingModule
  ],
  declarations: [ListEntreprisePage]
})
export class ListEntreprisePageModule {}
