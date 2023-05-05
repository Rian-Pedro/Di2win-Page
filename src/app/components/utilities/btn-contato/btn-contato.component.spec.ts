import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContatoComponent } from './btn-contato.component';

describe('BtnContatoComponent', () => {
  let component: BtnContatoComponent;
  let fixture: ComponentFixture<BtnContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
