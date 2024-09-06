import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatDateComponent } from './format-date.component';

describe('FormatDateComponent', () => {
  let component: FormatDateComponent;
  let fixture: ComponentFixture<FormatDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatDateComponent]
    });
    fixture = TestBed.createComponent(FormatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
