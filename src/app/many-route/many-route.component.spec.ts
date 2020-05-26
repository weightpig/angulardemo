import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyRouteComponent } from './many-route.component';

describe('ManyRouteComponent', () => {
  let component: ManyRouteComponent;
  let fixture: ComponentFixture<ManyRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManyRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
