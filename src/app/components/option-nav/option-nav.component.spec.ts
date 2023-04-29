import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionNavComponent } from './option-nav.component';

describe('OptionNavComponent', () => {
  let component: OptionNavComponent;
  let fixture: ComponentFixture<OptionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
