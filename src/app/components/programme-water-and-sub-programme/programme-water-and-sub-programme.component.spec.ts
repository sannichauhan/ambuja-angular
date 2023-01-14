import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeWaterAndSubProgrammeComponent } from './programme-water-and-sub-programme.component';

describe('ProgrammeWaterAndSubProgrammeComponent', () => {
  let component: ProgrammeWaterAndSubProgrammeComponent;
  let fixture: ComponentFixture<ProgrammeWaterAndSubProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeWaterAndSubProgrammeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeWaterAndSubProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
