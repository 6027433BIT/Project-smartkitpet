import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoSppderFeveritePageRoutingModule } from './info-sppder-feverite-routing.module';

import { InfoSppderFeveritePage } from './info-sppder-feverite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoSppderFeveritePageRoutingModule
  ],
  declarations: [InfoSppderFeveritePage]
})
export class InfoSppderFeveritePageModule {}
