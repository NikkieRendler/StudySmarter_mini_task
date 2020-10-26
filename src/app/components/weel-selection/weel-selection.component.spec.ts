import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeelSelectionComponent } from './weel-selection.component';

describe('WeelSelectionComponent', () => {
  let component: WeelSelectionComponent;
  let fixture: ComponentFixture<WeelSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeelSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeelSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
