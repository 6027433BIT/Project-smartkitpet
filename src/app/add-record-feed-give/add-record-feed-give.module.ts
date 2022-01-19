import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecordFeedGivePageRoutingModule } from './add-record-feed-give-routing.module';

import { AddRecordFeedGivePage } from './add-record-feed-give.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecordFeedGivePageRoutingModule
  ],
  declarations: [AddRecordFeedGivePage]
})
export class AddRecordFeedGivePageModule {}
