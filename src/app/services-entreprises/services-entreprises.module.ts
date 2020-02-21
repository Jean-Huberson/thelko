import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesEntreprisesPageRoutingModule } from './services-entreprises-routing.module';

import { ServicesEntreprisesPage } from './services-entreprises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesEntreprisesPageRoutingModule
  ],
  declarations: [ServicesEntreprisesPage]
})
export class ServicesEntreprisesPageModule {}
