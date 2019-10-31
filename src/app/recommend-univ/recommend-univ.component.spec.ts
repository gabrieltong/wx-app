import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendUnivComponent } from './recommend-univ.component';

describe('RecommendUnivComponent', () => {
  let component: RecommendUnivComponent;
  let fixture: ComponentFixture<RecommendUnivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendUnivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
