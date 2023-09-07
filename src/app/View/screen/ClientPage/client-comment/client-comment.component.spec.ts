import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommentComponent } from './client-comment.component';

describe('ClientCommentComponent', () => {
  let component: ClientCommentComponent;
  let fixture: ComponentFixture<ClientCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientCommentComponent]
    });
    fixture = TestBed.createComponent(ClientCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
