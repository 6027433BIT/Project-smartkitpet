import { AddRecordFeedPage } from './../add-record-feed/add-record-feed.page';
import { HistoryFeedPage } from './../history-feed/history-feed.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: ':id',
    component: HomePage,
  },
  {
    path: ':id/history/:historyId',
    component: HistoryFeedPage,
  },
  {
    path: ':id/history',
    component: HistoryFeedPage,
  },
  {
    path: ':id/manage',
    component: AddRecordFeedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
