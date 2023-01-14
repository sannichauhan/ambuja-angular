import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPresenceHComponent } from './our-presence-h.component';

describe('OurPresenceHComponent', () => {
  let component: OurPresenceHComponent;
  let fixture: ComponentFixture<OurPresenceHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPresenceHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPresenceHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
