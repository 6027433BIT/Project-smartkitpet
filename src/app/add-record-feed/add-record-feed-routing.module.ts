import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecordFeedPage } from './add-record-feed.page';

const routes: Routes = [
  {
    path: '',
    component: AddRecordFeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecordFeedPageRoutingModule {}
