import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalManageComponent } from './global-manage.component';

describe('GlobalManageComponent', () => {
  let component: GlobalManageComponent;
  let fixture: ComponentFixture<GlobalManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
