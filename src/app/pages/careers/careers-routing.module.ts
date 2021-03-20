import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareersPage } from './careers.page';

const routes: Routes = [
  {
    path: '',
    component: CareersPage
  },
  {
    path: 'enrichment-instructors',
    loadChildren: () => import('./enrichment-instructors/enrichment-instructors.module').then( m => m.EnrichmentInstructorsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareersPageRoutingModule {}
