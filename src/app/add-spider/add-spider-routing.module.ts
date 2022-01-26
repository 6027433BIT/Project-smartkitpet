import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSpiderPage } from './add-spider.page';

const routes: Routes = [
  {
    path: ':id',
    component: AddSpiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSpiderPageRoutingModule {}
