import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurImpactTheUnstoppableComponent } from './our-impact-the-unstoppable.component';

describe('OurImpactTheUnstoppableComponent', () => {
  let component: OurImpactTheUnstoppableComponent;
  let fixture: ComponentFixture<OurImpactTheUnstoppableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurImpactTheUnstoppableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurImpactTheUnstoppableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
