import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLineComponent } from './basic-line.component';

describe('BasicLineComponent', () => {
  let component: BasicLineComponent;
  let fixture: ComponentFixture<BasicLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicLineComponent]
    });
    fixture = TestBed.createComponent(BasicLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
