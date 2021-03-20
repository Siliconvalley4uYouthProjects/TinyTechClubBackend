import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StemSocialConfirmationPageRoutingModule } from './stem-social-confirmation-routing.module';

import { StemSocialConfirmationPage } from './stem-social-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StemSocialConfirmationPageRoutingModule
  ],
  declarations: [StemSocialConfirmationPage]
})
export class StemSocialConfirmationPageModule {}
