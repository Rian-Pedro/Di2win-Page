import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArqsExportsComponent } from './arqs-exports.component';

describe('ArqsExportsComponent', () => {
  let component: ArqsExportsComponent;
  let fixture: ComponentFixture<ArqsExportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArqsExportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArqsExportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
