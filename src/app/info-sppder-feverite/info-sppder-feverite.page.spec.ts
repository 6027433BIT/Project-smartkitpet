import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoSppderFeveritePage } from './info-sppder-feverite.page';

describe('InfoSppderFeveritePage', () => {
  let component: InfoSppderFeveritePage;
  let fixture: ComponentFixture<InfoSppderFeveritePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSppderFeveritePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoSppderFeveritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
