import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundFormComponent } from './compound-form.component';

describe('CompoundFormComponent', () => {
  let component: CompoundFormComponent;
  let fixture: ComponentFixture<CompoundFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundFormComponent]
    });
    fixture = TestBed.createComponent(CompoundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
