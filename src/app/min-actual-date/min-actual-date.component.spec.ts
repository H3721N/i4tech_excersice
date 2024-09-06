import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinActualDateComponent } from './min-actual-date.component';

describe('MinActualDateComponent', () => {
  let component: MinActualDateComponent;
  let fixture: ComponentFixture<MinActualDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinActualDateComponent]
    });
    fixture = TestBed.createComponent(MinActualDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
