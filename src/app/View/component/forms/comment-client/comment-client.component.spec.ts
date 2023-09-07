import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentClientComponent } from './comment-client.component';

describe('CommentClientComponent', () => {
  let component: CommentClientComponent;
  let fixture: ComponentFixture<CommentClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentClientComponent]
    });
    fixture = TestBed.createComponent(CommentClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
