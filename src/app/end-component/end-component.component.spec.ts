import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndComponentComponent } from './end-component.component';

describe('EndComponentComponent', () => {
  let component: EndComponentComponent;
  let fixture: ComponentFixture<EndComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndComponentComponent]
    });
    fixture = TestBed.createComponent(EndComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
