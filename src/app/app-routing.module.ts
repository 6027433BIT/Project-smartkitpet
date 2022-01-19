import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-spider',
    loadChildren: () => import('./add-spider/add-spider.module').then( m => m.AddSpiderPageModule)
  },
  {
    path: 'add-input',
    loadChildren: () => import('./add-input/add-input.module').then( m => m.AddInputPageModule)
  },
  {
    path: 'edit-spider',
    loadChildren: () => import('./edit-spider/edit-spider.module').then( m => m.EditSpiderPageModule)
  },
  {
    path: 'add-record-feed',
    loadChildren: () => import('./add-record-feed/add-record-feed.module').then( m => m.AddRecordFeedPageModule)
  },
  {
    path: 'add-record-feed-give',
    loadChildren: () => import('./add-record-feed-give/add-record-feed-give.module').then( m => m.AddRecordFeedGivePageModule)
  },
  {
    path: 'history-feed',
    loadChildren: () => import('./history-feed/history-feed.module').then( m => m.HistoryFeedPageModule)
  },
  {
    path: 'info-spider',
    loadChildren: () => import('./info-spider/info-spider.module').then( m => m.InfoSpiderPageModule)
  },
  {
    path: 'info-spider-thai',
    loadChildren: () => import('./info-spider-thai/info-spider-thai.module').then( m => m.InfoSpiderThaiPageModule)
  },
  {
    path: 'info-sppder-feverite',
    loadChildren: () => import('./info-sppder-feverite/info-sppder-feverite.module').then( m => m.InfoSppderFeveritePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
