import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrImplementationComponent } from './csr-implementation.component';

describe('CsrImplementationComponent', () => {
  let component: CsrImplementationComponent;
  let fixture: ComponentFixture<CsrImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrImplementationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
