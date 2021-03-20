import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StemSocialsPage } from './stem-socials.page';

describe('StemSocialsPage', () => {
  let component: StemSocialsPage;
  let fixture: ComponentFixture<StemSocialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StemSocialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StemSocialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
