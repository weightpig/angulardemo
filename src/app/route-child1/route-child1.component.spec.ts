import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChild1Component } from './route-child1.component';

describe('RouteChild1Component', () => {
  let component: RouteChild1Component;
  let fixture: ComponentFixture<RouteChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
