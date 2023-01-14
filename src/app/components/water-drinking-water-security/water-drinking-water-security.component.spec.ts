import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDrinkingWaterSecurityComponent } from './water-drinking-water-security.component';

describe('WaterDrinkingWaterSecurityComponent', () => {
  let component: WaterDrinkingWaterSecurityComponent;
  let fixture: ComponentFixture<WaterDrinkingWaterSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterDrinkingWaterSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterDrinkingWaterSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
