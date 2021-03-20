import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurCommunityPartnersComponent } from './our-community-partners.component';

describe('OurCommunityPartnersComponent', () => {
  let component: OurCommunityPartnersComponent;
  let fixture: ComponentFixture<OurCommunityPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCommunityPartnersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurCommunityPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
