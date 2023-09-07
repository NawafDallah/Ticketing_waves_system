import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCommentComponent } from './employee-comment.component';

describe('EmployeeCommentComponent', () => {
  let component: EmployeeCommentComponent;
  let fixture: ComponentFixture<EmployeeCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCommentComponent]
    });
    fixture = TestBed.createComponent(EmployeeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
