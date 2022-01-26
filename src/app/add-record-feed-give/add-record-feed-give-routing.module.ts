import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecordFeedGivePage } from './add-record-feed-give.page';

const routes: Routes = [
  {
    path: ':petid/:id',
    component: AddRecordFeedGivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecordFeedGivePageRoutingModule {}
