import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSpiderPageRoutingModule } from './add-spider-routing.module';

import { AddSpiderPage } from './add-spider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSpiderPageRoutingModule
  ],
  declarations: [AddSpiderPage]
})
export class AddSpiderPageModule {}
