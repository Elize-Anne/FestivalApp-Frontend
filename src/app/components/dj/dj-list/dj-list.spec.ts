import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjList } from './dj-list';

describe('DjList', () => {
  let component: DjList;
  let fixture: ComponentFixture<DjList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DjList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
