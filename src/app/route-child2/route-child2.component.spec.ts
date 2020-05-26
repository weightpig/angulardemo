import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChild2Component } from './route-child2.component';

describe('RouteChild2Component', () => {
  let component: RouteChild2Component;
  let fixture: ComponentFixture<RouteChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
