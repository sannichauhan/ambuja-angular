import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAllComponent } from './it-all.component';

describe('ItAllComponent', () => {
  let component: ItAllComponent;
  let fixture: ComponentFixture<ItAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
