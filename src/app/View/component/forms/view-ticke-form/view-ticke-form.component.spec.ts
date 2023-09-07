import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTickeFormComponent } from './view-ticke-form.component';

describe('ViewTickeFormComponent', () => {
  let component: ViewTickeFormComponent;
  let fixture: ComponentFixture<ViewTickeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTickeFormComponent]
    });
    fixture = TestBed.createComponent(ViewTickeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
