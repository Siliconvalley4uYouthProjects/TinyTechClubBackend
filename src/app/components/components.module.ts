import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [HeaderComponent, MenuComponent, FooterComponent],
    exports: [HeaderComponent, MenuComponent, FooterComponent],
})
export class ComponentsModule {

}