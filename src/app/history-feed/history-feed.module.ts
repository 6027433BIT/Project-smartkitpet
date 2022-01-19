import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryFeedPageRoutingModule } from './history-feed-routing.module';

import { HistoryFeedPage } from './history-feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryFeedPageRoutingModule
  ],
  declarations: [HistoryFeedPage]
})
export class HistoryFeedPageModule {}
