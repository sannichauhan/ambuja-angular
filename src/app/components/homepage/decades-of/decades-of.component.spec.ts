import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadesOfComponent } from './decades-of.component';

describe('DecadesOfComponent', () => {
  let component: DecadesOfComponent;
  let fixture: ComponentFixture<DecadesOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecadesOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecadesOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
