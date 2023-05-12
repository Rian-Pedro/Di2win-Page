import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosNumericosComponent } from './dados-numericos.component';

describe('DadosNumericosComponent', () => {
  let component: DadosNumericosComponent;
  let fixture: ComponentFixture<DadosNumericosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosNumericosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosNumericosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
