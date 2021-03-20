import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, FormGroup } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';


import { EqualityInEducationComponent } from './equality-in-education/equality-in-education.component';
import { SupportNextGenerationComponent } from './support-next-generation/support-next-generation.component';
import { ExpectInClassesComponent } from './expect-in-classes/expect-in-classes.component';
import { LearnWhatYouWantComponent } from './learn-what-you-want/learn-what-you-want.component';
import { OurCommunityPartnersComponent } from './our-community-partners/our-community-partners.component';
import { LEGORoboticsKitsComponent } from './lego-robotics-kits/lego-robotics-kits.component';
import { RegisterTodayComponent } from './register-today/register-today.component';

import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, 
    EqualityInEducationComponent,
    SupportNextGenerationComponent,
    ExpectInClassesComponent,
    LearnWhatYouWantComponent,
    OurCommunityPartnersComponent,
    LEGORoboticsKitsComponent,
    RegisterTodayComponent
  ],
  exports: [],
})
export class HomePageModule {

}

