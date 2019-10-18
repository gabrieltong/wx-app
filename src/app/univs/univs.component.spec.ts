import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivsComponent } from './univs.component';

describe('UnivsComponent', () => {
  let component: UnivsComponent;
  let fixture: ComponentFixture<UnivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
