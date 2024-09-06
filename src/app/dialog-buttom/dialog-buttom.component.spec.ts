import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogButtomComponent } from './dialog-buttom.component';

describe('DialogButtomComponent', () => {
  let component: DialogButtomComponent;
  let fixture: ComponentFixture<DialogButtomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogButtomComponent]
    });
    fixture = TestBed.createComponent(DialogButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
