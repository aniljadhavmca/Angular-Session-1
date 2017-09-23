import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSampleCompComponent } from './inner-sample-comp.component';

describe('InnerSampleCompComponent', () => {
  let component: InnerSampleCompComponent;
  let fixture: ComponentFixture<InnerSampleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerSampleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerSampleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
