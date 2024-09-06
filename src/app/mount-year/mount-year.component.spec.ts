import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountYearComponent } from './mount-year.component';

describe('MountYearComponent', () => {
  let component: MountYearComponent;
  let fixture: ComponentFixture<MountYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MountYearComponent]
    });
    fixture = TestBed.createComponent(MountYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
