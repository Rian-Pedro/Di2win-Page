import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTabletComponent } from './nav-tablet.component';

describe('NavTabletComponent', () => {
  let component: NavTabletComponent;
  let fixture: ComponentFixture<NavTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTabletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
