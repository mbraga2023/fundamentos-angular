import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentenPaiComponent } from './componenten-pai.component';

describe('ComponentenPaiComponent', () => {
  let component: ComponentenPaiComponent;
  let fixture: ComponentFixture<ComponentenPaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentenPaiComponent]
    });
    fixture = TestBed.createComponent(ComponentenPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
