import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutreachPageRoutingModule } from './outreach-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { OutreachPage } from './outreach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutreachPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [OutreachPage],
})
export class OutreachPageModule {}
