import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjDetails } from './dj-details';

describe('DjDetails', () => {
  let component: DjDetails;
  let fixture: ComponentFixture<DjDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
