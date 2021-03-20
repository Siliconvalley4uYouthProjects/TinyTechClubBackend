import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutreachPage } from './outreach.page';

const routes: Routes = [
  {
    path: '',
    component: OutreachPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutreachPageRoutingModule {}
