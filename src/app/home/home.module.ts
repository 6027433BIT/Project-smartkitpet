import { AddRecordFeedPage } from './../add-record-feed/add-record-feed.page';
import { HistoryFeedPage } from './../history-feed/history-feed.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
  HistoryFeedPage,
  AddRecordFeedPage
  ]
})
export class HomePageModule {}
