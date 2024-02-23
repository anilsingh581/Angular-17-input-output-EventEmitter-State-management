import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalBasedComponent } from './signal-based.component';

describe('SignalBasedComponent', () => {
  let component: SignalBasedComponent;
  let fixture: ComponentFixture<SignalBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalBasedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
