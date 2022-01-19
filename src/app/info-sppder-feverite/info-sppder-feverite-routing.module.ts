import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoSppderFeveritePage } from './info-sppder-feverite.page';

const routes: Routes = [
  {
    path: '',
    component: InfoSppderFeveritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoSppderFeveritePageRoutingModule {}
