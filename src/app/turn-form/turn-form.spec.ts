import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnForm } from './turn-form';

describe('TurnForm', () => {
  let component: TurnForm;
  let fixture: ComponentFixture<TurnForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurnForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
