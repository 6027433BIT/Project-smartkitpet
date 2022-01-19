import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoSpiderPageRoutingModule } from './info-spider-routing.module';

import { InfoSpiderPage } from './info-spider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoSpiderPageRoutingModule
  ],
  declarations: [InfoSpiderPage]
})
export class InfoSpiderPageModule {}
