import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnList } from './turn-list';

describe('TurnList', () => {
  let component: TurnList;
  let fixture: ComponentFixture<TurnList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurnList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
