import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFormComponent } from './assign-form.component';

describe('AssignFormComponent', () => {
  let component: AssignFormComponent;
  let fixture: ComponentFixture<AssignFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignFormComponent]
    });
    fixture = TestBed.createComponent(AssignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
