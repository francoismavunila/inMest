import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveComponent } from './leave.component';

describe('LeavesComponent', () => {
  let component: LeaveComponent;
  let fixture: ComponentFixture<LeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
