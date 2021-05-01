import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ChangePromptComponent } from './change-prompt/change-prompt.component';
@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [HeaderComponent, MenuComponent, FooterComponent, ChangePromptComponent],
    exports: [HeaderComponent, MenuComponent, FooterComponent, ChangePromptComponent],
})
export class ComponentsModule {

}