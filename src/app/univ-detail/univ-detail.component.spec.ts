import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivDetailComponent } from './univ-detail.component';

describe('UnivDetailComponent', () => {
  let component: UnivDetailComponent;
  let fixture: ComponentFixture<UnivDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
