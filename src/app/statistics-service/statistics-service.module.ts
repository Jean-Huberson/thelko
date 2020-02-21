import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'ionic4-star-rating';

import { IonicModule } from '@ionic/angular';

import { StatisticsServicePageRoutingModule } from './statistics-service-routing.module';

import { StatisticsServicePage } from './statistics-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    StatisticsServicePageRoutingModule
  ],
  declarations: [StatisticsServicePage]
})
export class StatisticsServicePageModule {}
