import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegisterComponent } from './table-register.component';

describe('TableRegisterComponent', () => {
  let component: TableRegisterComponent;
  let fixture: ComponentFixture<TableRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableRegisterComponent]
    });
    fixture = TestBed.createComponent(TableRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
