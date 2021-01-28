import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCarComponent } from './full-car.component';

describe('FullCarComponent', () => {
  let component: FullCarComponent;
  let fixture: ComponentFixture<FullCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
