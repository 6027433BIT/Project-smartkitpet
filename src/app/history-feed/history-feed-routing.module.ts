import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryFeedPage } from './history-feed.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryFeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryFeedPageRoutingModule {}
