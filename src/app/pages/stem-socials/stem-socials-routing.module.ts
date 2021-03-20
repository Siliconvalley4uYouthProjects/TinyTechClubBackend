import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StemSocialsPage } from './stem-socials.page';

const routes: Routes = [
  {
    path: '',
    component: StemSocialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StemSocialsPageRoutingModule {}
