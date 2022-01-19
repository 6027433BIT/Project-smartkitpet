import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRecordFeedPageRoutingModule } from './add-record-feed-routing.module';

import { AddRecordFeedPage } from './add-record-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRecordFeedPageRoutingModule
  ],
  declarations: [AddRecordFeedPage]
})
export class AddRecordFeedPageModule {}
