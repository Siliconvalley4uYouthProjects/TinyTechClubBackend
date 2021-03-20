import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LEGORoboticsKitsComponent } from './lego-robotics-kits.component';

describe('LEGORoboticsKitsComponent', () => {
  let component: LEGORoboticsKitsComponent;
  let fixture: ComponentFixture<LEGORoboticsKitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LEGORoboticsKitsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LEGORoboticsKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
