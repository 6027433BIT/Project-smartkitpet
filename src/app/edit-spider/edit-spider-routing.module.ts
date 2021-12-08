import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSpiderPage } from './edit-spider.page';

const routes: Routes = [
  {
    path: '',
    component: EditSpiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSpiderPageRoutingModule {}
