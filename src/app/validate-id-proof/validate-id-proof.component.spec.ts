import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateIdProofComponent } from './validate-id-proof.component';

describe('ValidateIdProofComponent', () => {
  let component: ValidateIdProofComponent;
  let fixture: ComponentFixture<ValidateIdProofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidateIdProofComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidateIdProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
