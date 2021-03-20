import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearnWhatYouWantComponent } from './learn-what-you-want.component';

describe('LearnWhatYouWantComponent', () => {
  let component: LearnWhatYouWantComponent;
  let fixture: ComponentFixture<LearnWhatYouWantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnWhatYouWantComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearnWhatYouWantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
