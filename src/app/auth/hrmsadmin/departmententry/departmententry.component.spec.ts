import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmententryComponent } from './departmententry.component';

describe('DepartmententryComponent', () => {
  let component: DepartmententryComponent;
  let fixture: ComponentFixture<DepartmententryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmententryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
