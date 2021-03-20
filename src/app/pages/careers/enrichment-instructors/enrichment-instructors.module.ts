import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { EnrichmentInstructorsPageRoutingModule } from './enrichment-instructors-routing.module';

import { EnrichmentInstructorsPage } from './enrichment-instructors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    EnrichmentInstructorsPageRoutingModule
  ],
  declarations: [EnrichmentInstructorsPage]
})
export class EnrichmentInstructorsPageModule {}
