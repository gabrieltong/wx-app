import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSearchItemComponent } from './adv-search-item.component';

describe('AdvSearchItemComponent', () => {
  let component: AdvSearchItemComponent;
  let fixture: ComponentFixture<AdvSearchItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvSearchItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
