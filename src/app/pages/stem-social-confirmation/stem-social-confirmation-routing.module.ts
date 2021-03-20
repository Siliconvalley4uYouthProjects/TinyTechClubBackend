import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StemSocialConfirmationPage } from './stem-social-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: StemSocialConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StemSocialConfirmationPageRoutingModule {}
