import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestarGratisComponent } from './testar-gratis.component';

describe('TestarGratisComponent', () => {
  let component: TestarGratisComponent;
  let fixture: ComponentFixture<TestarGratisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestarGratisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestarGratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
