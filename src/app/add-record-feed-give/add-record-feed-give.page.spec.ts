import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRecordFeedGivePage } from './add-record-feed-give.page';

describe('AddRecordFeedGivePage', () => {
  let component: AddRecordFeedGivePage;
  let fixture: ComponentFixture<AddRecordFeedGivePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecordFeedGivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRecordFeedGivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
