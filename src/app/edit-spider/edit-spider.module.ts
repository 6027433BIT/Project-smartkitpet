import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSpiderPageRoutingModule } from './edit-spider-routing.module';

import { EditSpiderPage } from './edit-spider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSpiderPageRoutingModule
  ],
  declarations: [EditSpiderPage]
})
export class EditSpiderPageModule {}
