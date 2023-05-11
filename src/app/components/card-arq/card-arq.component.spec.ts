import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArqComponent } from './card-arq.component';

describe('CardArqComponent', () => {
  let component: CardArqComponent;
  let fixture: ComponentFixture<CardArqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardArqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
