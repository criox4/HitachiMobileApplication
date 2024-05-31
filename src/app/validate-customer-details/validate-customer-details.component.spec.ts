import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateCustomerDetailsComponent } from './validate-customer-details.component';

describe('ValidateCustomerDetailsComponent', () => {
  let component: ValidateCustomerDetailsComponent;
  let fixture: ComponentFixture<ValidateCustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateCustomerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateCustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
