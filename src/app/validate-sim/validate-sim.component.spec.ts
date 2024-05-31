import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateSimComponent } from './validate-sim.component';

describe('ValidateSimComponent', () => {
  let component: ValidateSimComponent;
  let fixture: ComponentFixture<ValidateSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateSimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
