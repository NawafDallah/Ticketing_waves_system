import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManagerComponent } from './dashboard-manager.component';

describe('DashboardManagerComponent', () => {
  let component: DashboardManagerComponent;
  let fixture: ComponentFixture<DashboardManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardManagerComponent]
    });
    fixture = TestBed.createComponent(DashboardManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
