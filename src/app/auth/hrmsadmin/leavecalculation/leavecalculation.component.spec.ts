import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecalculationComponent } from './leavecalculation.component';

describe('LeavecalculationComponent', () => {
  let component: LeavecalculationComponent;
  let fixture: ComponentFixture<LeavecalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavecalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavecalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
