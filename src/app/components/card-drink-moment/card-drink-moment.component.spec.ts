import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDrinkMomentComponent } from './card-drink-moment.component';

describe('CardDrinkMomentComponent', () => {
  let component: CardDrinkMomentComponent;
  let fixture: ComponentFixture<CardDrinkMomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDrinkMomentComponent]
    });
    fixture = TestBed.createComponent(CardDrinkMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
