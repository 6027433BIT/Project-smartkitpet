import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoSpiderThaiPageRoutingModule } from './info-spider-thai-routing.module';

import { InfoSpiderThaiPage } from './info-spider-thai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoSpiderThaiPageRoutingModule
  ],
  declarations: [InfoSpiderThaiPage]
})
export class InfoSpiderThaiPageModule {}
