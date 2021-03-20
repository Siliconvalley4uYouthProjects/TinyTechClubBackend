import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutreachPage } from './outreach.page';

describe('OutreachPage', () => {
  let component: OutreachPage;
  let fixture: ComponentFixture<OutreachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutreachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutreachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
