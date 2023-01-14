import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProgrammesComponent } from './our-programmes.component';

describe('OurProgrammesComponent', () => {
  let component: OurProgrammesComponent;
  let fixture: ComponentFixture<OurProgrammesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurProgrammesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProgrammesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
