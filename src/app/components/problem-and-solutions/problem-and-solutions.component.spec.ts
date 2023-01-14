import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemAndSolutionsComponent } from './problem-and-solutions.component';

describe('ProblemAndSolutionsComponent', () => {
  let component: ProblemAndSolutionsComponent;
  let fixture: ComponentFixture<ProblemAndSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemAndSolutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemAndSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
