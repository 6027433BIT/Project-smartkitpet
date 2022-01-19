import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoSpiderPage } from './info-spider.page';

const routes: Routes = [
  {
    path: '',
    component: InfoSpiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoSpiderPageRoutingModule {}
