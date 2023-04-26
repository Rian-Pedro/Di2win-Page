import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidcComponent } from './fidc.component';

describe('FidcComponent', () => {
  let component: FidcComponent;
  let fixture: ComponentFixture<FidcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
